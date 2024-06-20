import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpensesScreen = ({ expenses }) => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={expensesCtx.expenses}
        expensesPeriod={"All Expenses"}
      />
    </View>
  );
};

export default AllExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});
