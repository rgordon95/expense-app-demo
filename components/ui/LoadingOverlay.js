import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const LoadingOverlay = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="white" />
        </View>
    )
};

export default LoadingOverlay;

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary700,
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },
    });