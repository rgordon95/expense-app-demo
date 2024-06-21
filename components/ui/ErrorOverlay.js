import { Text, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import CustomButton from "./CustomButton";

const ErrorOverlay = ({handler, message}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An error occured.</Text>
            <Text style={styles.text}>{message}</Text>
            <CustomButton onPress={handler}>Close</CustomButton>
        </View>
    )
};

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary700,
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },
    text: {
        color: "white",
        textAlign: "center",
        margin: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    }
    });