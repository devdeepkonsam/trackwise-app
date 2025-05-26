export default function About() {
  return (
    <div className="p-8 flex flex-col items-center text-center min-h-[60vh] justify-center">
      <h1 className="font-extrabold text-4xl mb-4 text-primary">
        About <span className="text-black">TrackWise</span>
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        <span className="font-semibold text-primary">TrackWise</span> is your smart,
        AI-powered companion for mastering your finances.
        <br />
        <br />
        We help you track your income, budgets, and expenses effortlessly, so you can
        focus on what matters most. Our mission is to empower you with actionable
        insights and tools to make confident financial decisions—every day.
        <br />
        <br />
        <span className="italic text-gray-500">
          Take control. Spend smarter. Grow your wealth with TrackWise.
        </span>
      </p>
      <div className="mt-4 text-sm text-gray-400">
        Made with ❤️ by the TrackWise Team
      </div>
    </div>
  );
}