import { createContext, useReducer } from "react";
import { DUMMY_EXPENSES } from "../mockdata";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ amount, date, description }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { amount, date, description }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (expenseId) => {
    dispatch({ type: "DELETE", payload: expenseId });
  };

  const updateExpense = (expenseId, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: expenseId, data: expenseData } });
  };

  return (
    <ExpensesContext.Provider
      value={{
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
