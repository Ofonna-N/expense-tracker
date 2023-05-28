export type Expense = {
  description: string;
  amount: number;
  category: string;
};

export type ExpenseContext = {
  expenses: Expense[];
  addExpense: () => void;
  deleteExpense: () => void;
};
