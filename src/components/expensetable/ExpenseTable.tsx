import ExpenseTableTitle from "./ExpenseTableTitle";
import ExpenseItem from "./ExpenseItem";

const ExpenseTable = () => {
  return (
    <div className="grid grid-cols-4 ">
      <ExpenseTableTitle />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
};

export default ExpenseTable;
