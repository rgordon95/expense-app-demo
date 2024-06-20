import { StyleSheet, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    paddingBottom: 0,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    marginTop: 32,
    textAlign: "center",
  },
});
