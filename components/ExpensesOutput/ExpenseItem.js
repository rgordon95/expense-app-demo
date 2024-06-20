import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../utils/date";

const ExpenseItem = ({ amount, date, description, id }) => {
  const navigation = useNavigation();
  const expressPressHandler = () => {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  };

  return (
    <Pressable
      onPress={expressPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.descriptionText]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  amountContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 4,
    justifyContent: "center",
    minWidth: 80,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  amountText: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  descriptionText: {
    color: GlobalStyles.colors.primary50,
    fontSize: 16,
    fontWeight: "bold",
    margin: 4,
  },
  expenseItem: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 12,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  pressed: {
    opacity: 0.75,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
    fontSize: 16,
  },
});
