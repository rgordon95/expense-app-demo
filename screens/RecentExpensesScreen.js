import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDaysMinusDays } from "../utils/date";
import { getExpenses } from "../utils/http";
import ErrorOverlay from "../components/ui/ErrorOverlay";
const RecentExpensesScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDaysMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  const errorHandler = () => {
    setError(null);
  }

  useEffect(() => {
    async function fetchExpenses() {
      setIsLoading(true);
      try {
        const expenses = await getExpenses();

      } catch (e) {
        setError(e.message);
      
      }
      setIsLoading(false);
      expensesCtx.setExpenses(expenses);
    }

    fetchExpenses();
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (error && !isLoading) {
    return <ErrorOverlay message={error} handler={errorHandler} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="Last 7 Days"
        fallbackText="No expenses in the last 7 days."
      />
    </View>
  );
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
