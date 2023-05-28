import { useContext } from "react";
import Context from "../components/expensecontext/ExpenseContext";
const useExpenseContext = () => {
  const context = useContext(Context);

  return context;
};

export default useExpenseContext;
