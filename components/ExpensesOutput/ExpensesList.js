import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

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
