import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

const aiFinanceData = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} INR 
      - Expenses: ${totalSpend} INR 
      - Incomes: ${totalIncome} INR
      Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively and 
      don't  include 1.about not enought data like expenses data, 2.create a budget coz its already a budget tracker webiste.
      just focus on how to manage the finances better.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: userPrompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default aiFinanceData;
