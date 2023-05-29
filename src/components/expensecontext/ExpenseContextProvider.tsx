import { useEffect, useState } from "react";
import { Expense, ExpenseContext } from "../../customTypes/CustomTypes";
import Context from "./ExpenseContext";

type Props = {
  children: React.ReactNode;
};

const ExpenseContextProvider: React.FC<Props> = ({ children }) => {
  const [expenses, setExpense] = useState<Expense[]>([]);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);
  const [filterTag, setFilterTag] = useState("All");

  useEffect(() => {
    if (filterTag === "All") {
      setFilteredExpenses(expenses);
    } else {
      setFilteredExpenses(expenses.filter((e) => e.category === filterTag));
    }
  }, [filterTag, expenses]);

  const expenseContext: ExpenseContext = {
    expenses: filteredExpenses,
    addExpense: (item) => {
      const newExpenses = [...expenses, item];
      setExpense(newExpenses);
    },
    deleteExpense: (id) => {
      const filtered = expenses.filter((expense) => expense.id !== id);

      setExpense(filtered);
    },
    setFilter(filter) {
      setFilterTag(filter);
      // if (filter === "All") {
      //   setFilteredExpenses(expenses);
      //   return;
      // }
      // const filtered = expenses.filter(
      //   (expense) => expense.category === filter
      // );

      // setFilteredExpenses(filtered);
    },
  };

  return <Context.Provider value={expenseContext}>{children}</Context.Provider>;
};

export default ExpenseContextProvider;
