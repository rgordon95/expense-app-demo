import { FlatList, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

import { GlobalStyles } from "../../constants/styles";

const RenderExpenseItem = (itemData) => {
  return (
    <ExpenseItem {...itemData.item} />
  );
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={RenderExpenseItem}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    padding: 24,
  },
});
