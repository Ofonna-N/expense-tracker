import { useState } from "react";
import { Expense, ExpenseContext } from "../../customTypes/CustomTypes";
import Context from "./ExpenseContext";

type Props = {
  children: React.ReactNode;
};

const ExpenseContextProvider: React.FC<Props> = ({ children }) => {
  const [expenses, setExpense] = useState<Expense[]>([]);

  const expenseContext: ExpenseContext = {
    expenses,
    addExpense: () => {},
    deleteExpense: () => {},
  };

  return <Context.Provider value={expenseContext}>{children}</Context.Provider>;
};

export default ExpenseContextProvider;
