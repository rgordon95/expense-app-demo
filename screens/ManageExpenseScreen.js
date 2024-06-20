import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpenseScreen = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const expensesCtx = useContext(ExpensesContext);

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [editedExpenseId, navigation]);

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (expenseData) => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultValues={selectedExpense}
        isEditing={isEditing}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            size={30}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 24,
  },
  deleteContainer: {
    alignItems: "center",
    borderTopColor: GlobalStyles.colors.primary200,
    borderTopWidth: 2,
    marginTop: 16,
    paddingTop: 8,
  },
});
