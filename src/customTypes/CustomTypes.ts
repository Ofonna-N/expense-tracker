export type Expense = {
  id: string;
  description: string;
  amount: number;
  category: string;
};

export type ExpenseContext = {
  expenses: Expense[];
  addExpense: (item: Expense) => void;
  deleteExpense: (id: string) => void;
  setFilter: (filter: string) => void;
};
