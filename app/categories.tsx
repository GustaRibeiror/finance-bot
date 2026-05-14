import CategoriesList from "@/components/categoriesList";
import Contact from "@/components/contact";
import IconNavigation from "@/components/iconNavigation";
import { colors } from "@/constants/colors";
import { StyleSheet, View } from "react-native";

export interface Category {
  id: number;
  name: string;
  type: "income" | "expense";
}

const MOCK_CATEGORIES: Category[] = [
  { id: 1, name: "Salário", type: "income" },
  { id: 2, name: "Alimentação", type: "expense" },
  { id: 3, name: "Transporte", type: "expense" },
  { id: 4, name: "Investimentos", type: "income" },
];

export default function Categories() {
  return (
    <View style={styles.container}>
      <View style={styles.contactSpace}>
        <Contact>Minhas Categorias</Contact>
        <IconNavigation style={styles.icon} link="/" icon="chatbox" size={24} />
      </View>
      <View style={{ flex: 1, marginHorizontal: 14 }}>
        <CategoriesList data={MOCK_CATEGORIES} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 48,
  },
  icon: {
    justifyContent: "center",
    alignSelf: "center",
  },
  contactSpace: {
    borderColor: "gray",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
