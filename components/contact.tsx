import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

interface props {
  children: string;
}

export default function Contact({ children }: props) {
  const router = useRouter();

  return (
    <View>
      <View style={styles.leftContainer}>
        <Image
          source={require("../assets/images/perfil.png")}
          style={{ width: 35, height: 35, borderRadius: 115 }}
        />
        <Text style={styles.text}>{children}</Text>
      </View>
      {/* <TouchableOpacity onPress={() => router.push("/categories")}>
        <Ionicons
          style={{ justifyContent: "center", alignSelf: "center" }}
          color="green"
          name="grid-outline"
          size={size}
        />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   borderColor: "gray",
  //   borderBottomWidth: 1,
  //   paddingHorizontal: 16,
  //   paddingVertical: 14,
  //   flexDirection: "row",
  // },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "white",
    fontWeight: 600,
    fontSize: 20,
  },
});
