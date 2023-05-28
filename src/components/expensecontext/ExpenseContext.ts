import { createContext } from "react";
import { ExpenseContext } from "../../customTypes/CustomTypes";

const Context = createContext<ExpenseContext>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
});

export default Context;
