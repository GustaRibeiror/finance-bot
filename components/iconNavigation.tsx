import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";

interface props {
  link: Href;
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  style?: object;
}

export default function IconNavigation({ link, icon, size, style }: props) {
  const router = useRouter();

  return (
    <View style={style}>
      <TouchableOpacity onPress={() => router.push(link)}>
        <Ionicons
          style={{ justifyContent: "center", alignSelf: "center" }}
          color="green"
          name={icon}
          size={size}
        />
      </TouchableOpacity>
    </View>
  );
}
