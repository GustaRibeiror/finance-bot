import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AddCategoryButton() {
  function onPress() {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Ionicons name="add-circle-outline" size={24} color="#ffffff" />
      <Text style={styles.text}>Nova Categoria</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4caf50",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 8,

    marginVertical: 16,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
