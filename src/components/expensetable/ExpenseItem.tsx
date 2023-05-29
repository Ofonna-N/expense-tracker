import { Expense } from "../../customTypes/CustomTypes";
import useExpenseContext from "../../customhooks/useExpenseContext";

type Props = {
  expense: Expense;
};

const ExpenseItem: React.FC<Props> = ({ expense }) => {
  const expenseContext = useExpenseContext();
  return (
    <>
      <div className="p-[1rem] border">{expense.description}</div>
      <div className="p-[1rem] border">
        ${Number(expense.amount).toFixed(2)}
      </div>
      <div className="p-[1rem] border">{expense.category}</div>
      <div className="p-[1rem] border">
        <button
          className="font-semibold rounded-[5px] px-[1rem] py-[0.5rem] border-[2px] border-red-600 text-red-600 hover:bg-red-500 hover:text-white"
          onClick={() => {
            expenseContext.deleteExpense(expense.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ExpenseItem;
