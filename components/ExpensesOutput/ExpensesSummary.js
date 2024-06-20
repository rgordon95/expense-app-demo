import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <View style={styles.container}>
        <Text style={styles.periodText}>{periodName}</Text>
        <Text style={styles.sumText}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    padding: 8,
    justifyContent: "space-between",
  },
  periodText: {
    color: GlobalStyles.colors.primary400,
    fontSize: 12,
  },
  sumText: {
    color: GlobalStyles.colors.primary500,
    fontSize: 16,
    fontWeight: "bold",
  }
});
