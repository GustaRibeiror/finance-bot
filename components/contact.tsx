import { Image, StyleSheet, Text, View } from "react-native";

interface props {
  children: string;
}

export default function Contact({ children }: props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/perfil.png")}
        style={{ width: 35, height: 35, borderRadius: 115 }}
      />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "gray",
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 26,
  },
  text: {
    color: "white",
    fontWeight: 600,
    fontSize: 23,
  },
});
