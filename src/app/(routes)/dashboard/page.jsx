"use client";
import React, { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import CardInfo from "./_components/CardInfo";
import { db } from "../../../../utils/dbConfig";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses, Incomes } from "../../../../utils/schema";
import BarChartDashboard from "./_components/BarChartDashboard";
import ExpenseListTable from "./expenses/_components/ExpenseListTable";
import BudgetItem from "./budgets/_components/BudgetItem";
import * as XLSX from "xlsx";

function Dashboard() {
  const { user } = useUser();

  const [budgetList, setBudgetList] = useState([]);
  const [incomeList, setIncomeList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  useEffect(() => {
    user && getBudgetList();
  }, [user]);

  const getBudgetList = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum((${Expenses.amount})::numeric)`.mapWith(Number),
        totalItems: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id));

    setBudgetList(result);
    getAllEXpenses();
    getIncomeList();
  };

  const getAllEXpenses = async () => {
    const result = await db
      .select({
        id: Expenses.id,
        name: Expenses.name,
        amount: Expenses.amount,
        createdAt: Expenses.createdAt,
      })
      .from(Budgets)
      .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(Expenses.id));

    setExpensesList(result);
  };

  const getIncomeList = async () => {
  try {
    const result = await db
      .select({
        ...getTableColumns(Incomes),
        totalAmount: sql`sum((${Incomes.amount})::numeric)`.mapWith(Number),
      })
      .from(Incomes)
      .where(eq(Incomes.createdBy, user?.primaryEmailAddress?.emailAddress))
      .groupBy(Incomes.id);

    setIncomeList(result);
  } catch (error) {
    console.error("Error fetching income list:", error);
  }
};

  const exportAllDataToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const data = [];
    data.push(["Budgets"]);
    data.push(["S.No", "Name", "Total Spend", "Total Items"]);
    budgetList.forEach((budget, index) => {
      data.push([
        index + 1,
        budget.name,
        `₹${budget.totalSpend}`,
        budget.totalItems,
      ]);
    });
    data.push([]);
    data.push(["Incomes"]);
    data.push(["S.No", "Source", "Amount"]);
    incomeList.forEach((income, index) => {
      data.push([index + 1, income.name, `₹${income.amount}`]);
    });
    data.push([]);
    data.push(["Expenses"]);
    data.push(["S.No", "Name", "Amount", "Date"]);
    expensesList.forEach((expense, index) => {
      data.push([
        index + 1,
        expense.name,
        `₹${expense.amount}`,
        expense.createdAt,
      ]);
    });
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");

    const now = new Date();
    const formattedTime = `${String(now.getDate()).padStart(2, "0")}${String(
      now.getMonth() + 1
    ).padStart(2, "0")}_${String(now.getHours()).padStart(2, "0")}${String(
      now.getMinutes()
    ).padStart(2, "0")}`;
    const fileName = `${user?.firstName || "User"}_${formattedTime}.xlsx`;

    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className="p-8 bg-">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="font-bold text-4xl text-black">
            Hi, {user?.fullName} 👋
          </h2>
          <p className="text-black">
            Here's what happening with your money, Let's manage your expenses.
          </p>
        </div>
        <button
          onClick={exportAllDataToExcel}
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
        >
          Download All Data
        </button>
      </div>

      <CardInfo budgetList={budgetList} incomeList={incomeList} />
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-5">
        <div className="lg:col-span-2">
          <BarChartDashboard budgetList={budgetList} />
          <ExpenseListTable
            expensesList={expensesList}
            refreshData={() => getAllEXpenses()}
            showDownloadButton={false}
          />
        </div>
        <div className="grid gap-5">
          <h2 className="font-bold text-lg">Latest Budgets</h2>
          {budgetList?.length > 0
            ? budgetList.map((budget, index) => (
                <BudgetItem budget={budget} key={index} />
              ))
            : [1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  className="h-[180px] w-full bg-slate-200 animate-pulse"
                ></div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
