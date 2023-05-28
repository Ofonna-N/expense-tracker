import ExpenseTable from "./components/expensetable/ExpenseTable";
import FilterSection from "./components/filter/FilterSection";
import FormSection from "./components/form/FormSection";

function App() {
  return (
    <main>
      <div className=" w-full max-w-screen-md mx-auto py-[5rem] px-[4rem] ">
        <h1 className="text-[3rem] text-center font-bold">EXPENSE TRACKER</h1>
        <FormSection />
        <FilterSection />
        <ExpenseTable />
      </div>
    </main>
  );
}

export default App;
