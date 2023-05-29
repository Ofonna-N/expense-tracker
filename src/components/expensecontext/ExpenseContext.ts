import { createContext } from "react";
import { ExpenseContext } from "../../customTypes/CustomTypes";

const Context = createContext<ExpenseContext>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  setFilter() {},
});

export default Context;
