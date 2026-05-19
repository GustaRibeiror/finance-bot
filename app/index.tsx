import { colors } from "@/constants/colors";
import { login } from "@/services/authService";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import * as SecureStore from "expo-secure-store";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLoginMessage, setErrorLoginMessage] = useState<string | null>(
    null,
  );

  const router = useRouter();

  async function handlePress() {
    try {
      setErrorLoginMessage(null);

      const data = await login(email, password);

      await SecureStore.setItemAsync("user_token", data.token);

      router.replace("/home");
    } catch (error: any) {
      setErrorLoginMessage(error.message);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/money_icon.png")}
          />
          <Text style={styles.title}>Bem-vindo</Text>
          <Text style={styles.subtitle}>Faça login para entrar no sistema</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#888888"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#888888"
            secureTextEntry={true}
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
          <Text style={styles.errorText}>{errorLoginMessage}</Text>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => handlePress()}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || "#121212",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 48,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 16,
    color: "#a0a0a0",
    marginTop: 4,
  },
  formContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#333333",
  },
  button: {
    backgroundColor: "#4caf50",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    padding: 4,
  },
});
