import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ color, onPress, name, size }) => {
  return (
    <Pressable style={(pressed) => pressed && styles.pressed} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Ionicons name={name} size={size} color={color} style={styles.button} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 0,
  },
  buttonContainer: {
    borderRadius: 24,
    marginHorizontal: 8,
    marginVertical: 2,
    padding: 6,
  },

  pressed: {
    opacity: 0.75,
  },
});
