import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDaysMinusDays } from "../utils/date";
const RecentExpensesScreen = ({ navigation }) => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDaysMinusDays(today, 7);

    return (expense.date > date7DaysAgo);
  });

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
