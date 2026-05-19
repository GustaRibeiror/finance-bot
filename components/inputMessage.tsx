import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

interface InputMessageProps {
  onSendMessage: (message: string) => void;
}

export default function InputMessage({ onSendMessage }: InputMessageProps) {
  const [text, setText] = useState("");
  const [categories, setCategories] = useState([]);

  async function handleInput() {
    if (text.trim().length > 0) {
      onSendMessage(text);
    }
    setText("");
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem..."
        placeholderTextColor="#808080"
        keyboardType="default"
        onChangeText={(newText) => setText(newText)}
        value={text}
        multiline
      />
      <TouchableOpacity onPress={() => handleInput()} style={styles.button}>
        <Ionicons name="send" size={24} color={"#00FF00"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-evenly",
  },

  input: {
    backgroundColor: colors.surface,
    fontSize: 16,
    padding: 16,
    paddingVertical: 10,
    borderRadius: 16,
    color: "white",
    width: "85%",
  },

  button: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
