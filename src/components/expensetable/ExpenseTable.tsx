import ExpenseTableTitle from "./ExpenseTableTitle";
import ExpenseItem from "./ExpenseItem";
import useExpenseContext from "../../customhooks/useExpenseContext";

const ExpenseTable = () => {
  const expenseContext = useExpenseContext();

  return (
    <div className="grid grid-cols-4 ">
      <ExpenseTableTitle />
      {expenseContext.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}

      {/* <ExpenseItem /> */}
    </div>
  );
};

export default ExpenseTable;
