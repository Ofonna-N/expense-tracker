import FormSection from "./components/form/FormSection";

function App() {
  return (
    <main>
      <div className=" w-full max-w-screen-md mx-auto py-[5rem]">
        <h1 className="text-[3rem] text-center font-bold">EXPENSE TRACKER</h1>
        <FormSection />
        {/* Drop down Filter, By categories, Groceries, utility and Entertainment */}
        {/* Expense Table */}
      </div>
    </main>
  );
}

export default App;
