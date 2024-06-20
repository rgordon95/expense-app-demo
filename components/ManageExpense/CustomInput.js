import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const CustomInput = ({ extraStyles, invalid, label, textInputConfig }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.container, extraStyles]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        {...textInputConfig}
        style={[inputStyles, invalid && styles.invalidInput]}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderRadius: 6,
    color: GlobalStyles.colors.primary700,
    fontSize: 16,
    marginBottom: 12,
    padding: 6,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 12,
    marginBottom: 4,
  },
});
