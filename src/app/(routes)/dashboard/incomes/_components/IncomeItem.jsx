import React from "react";
import { Trash2 } from "lucide-react";
import { db } from "../../../../../../utils/dbConfig";
import { Incomes } from "../../../../../../utils/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";

function IncomeItem({ budget, refreshData }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };

  const deleteIncome = async (e) => {
    e.stopPropagation();
    try {
      await db.delete(Incomes).where(eq(Incomes.id, budget.id));
      toast("Income source deleted!");
      if (refreshData) refreshData();
    } catch (error) {
      toast("Failed to delete income.");
      console.error(error);
    }
  };

  return (
    <div
      className="p-5 border rounded-2xl hover:shadow-md cursor-pointer h-[170px]"
    >
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2
            className="text-2xl p-3 px-4 bg-slate-100 rounded-full"
          >
            {budget?.icon}
          </h2>
          <div>
            <h2 className="font-bold">{budget.name}</h2>
            <h2 className="text-sm text-gray-500">Income Source</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-primary text-lg"> ₹{budget.amount}</h2>
          <button
            onClick={deleteIncome}
            className="text-red-500 hover:bg-red-100 rounded-full p-2"
            title="Delete Income"
          >
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
