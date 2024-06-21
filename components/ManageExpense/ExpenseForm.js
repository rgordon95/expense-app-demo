import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import CustomButton from "../ui/CustomButton";
import CustomInput from "./CustomInput";
import { getFormattedDate } from "../../utils/date";
import { GlobalStyles } from "../../constants/styles";

const ExpenseForm = ({ defaultValues, isEditing, onCancel, onSubmit }) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues?.amount.toString() || "",
      isValid: true,
    },
    date: {
      value: defaultValues?.date ? getFormattedDate(defaultValues?.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues?.description || "",
      isValid: true,
    },
  });

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: {
          value: enteredValue,
          isValid: true,
        },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((prevState) => {
        return {
          amount: {
            value: prevState.amount.value,
            isValid: amountIsValid,
          },
          date: {
            value: prevState.date.value,
            isValid: dateIsValid,
          },
          description: {
            value: prevState.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  const isFormInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputRow}>
        <CustomInput
          label="Amount"
          extraStyles={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          invalid={!inputs.amount.isValid}
        />
        <CustomInput
          label="Date"
          extraStyles={styles.rowInput}
          textInputConfig={{
            onChangeText: inputChangedHandler.bind(this, "date"),
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            returnKeyType: "done",
            value: inputs.date.value,
          }}
          invalid={!inputs.date.isValid}
        />
      </View>
      <CustomInput
        label="Description"
        multiline={true}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, "description"),
          maxLength: 20,
          value: inputs.description.value,
        }}
        invalid={!inputs.description.isValid}
      />
      {isFormInvalid && (
        <Text style={styles.errorText}>
          Invalid Values entered. Please fix them.
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <CustomButton mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton onPress={submitHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </CustomButton>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    minWidth: 130,
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  container: {
    flex: 1,
    marginHorizontal: 4,
    marginTop: 50,
  },
  errorText: {
    color: GlobalStyles.colors.error500,
    fontSize: 14,
    margin: 8,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center",
  },
});
