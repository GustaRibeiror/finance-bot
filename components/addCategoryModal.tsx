import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface AddCategoryModalProps {
  visible: boolean;
  onClose: () => void;

  onSave: (name: string, type: "income" | "expense") => void;
}

export default function AddCategoryModal({
  visible,
  onClose,
  onSave,
}: AddCategoryModalProps) {
  const [name, setName] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");

  const handleSave = () => {
    if (!name.trim()) return;
    onSave(name, type);

    setName("");
    setType("expense");
  };

  const handleClose = () => {
    setName("");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Nova Categoria</Text>

          {/* INPUT DO NOME */}
          <TextInput
            style={styles.input}
            placeholder="Nome da categoria (ex: Alimentação)"
            placeholderTextColor="#888888"
            value={name}
            onChangeText={setName}
            autoFocus={true}
          />

          {/* SELEÇÃO DE TIPO (ENTRADA / SAÍDA) */}
          <View style={styles.typeContainer}>
            <TouchableOpacity
              style={[
                styles.typeButton,
                type === "income" && styles.typeButtonActiveIncome,
              ]}
              onPress={() => setType("income")}
            >
              <Text
                style={[
                  styles.typeText,
                  type === "income" && styles.typeTextActive,
                ]}
              >
                Entrada
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.typeButton,
                type === "expense" && styles.typeButtonActiveExpense,
              ]}
              onPress={() => setType("expense")}
            >
              <Text
                style={[
                  styles.typeText,
                  type === "expense" && styles.typeTextActive,
                ]}
              >
                Saída
              </Text>
            </TouchableOpacity>
          </View>

          {/* BOTÕES DE AÇÃO */}
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "#1e1e1e",
    borderRadius: 16,
    padding: 24,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#121212",
    color: "#ffffff",
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#333333",
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  typeButton: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  typeButtonActiveIncome: {
    backgroundColor: "rgba(76, 175, 79, 0.2)",
    borderColor: "#4caf50",
  },
  typeButtonActiveExpense: {
    backgroundColor: "rgba(244, 67, 54, 0.2)",
    borderColor: "#f44336",
  },
  typeText: {
    color: "#888888",
    fontSize: 16,
    fontWeight: "600",
  },
  typeTextActive: {
    color: "#ffffff",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginRight: 12,
  },
  cancelButtonText: {
    color: "#a0a0a0",
    fontSize: 16,
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#4caf50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
