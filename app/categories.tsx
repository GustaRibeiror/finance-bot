import AddCategoryButton from "@/components/addCategoryButton";
import CategoriesList from "@/components/categoriesList";
import Contact from "@/components/contact";
import IconNavigation from "@/components/iconNavigation";
import { colors } from "@/constants/colors";
import { getCategories } from "@/services/categoryService";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export interface Category {
  id: number;
  name: string;
  type: "income" | "expense";
}

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
        console.log("Categorias:", data);
      } catch (error) {
        console.log(`Erro ao buscar categorias: ${error}`);
      }
    }

    fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contactSpace}>
        <Contact>Minhas Categorias</Contact>
        <IconNavigation
          style={styles.icon}
          link="/home"
          icon="chatbox"
          size={24}
        />
      </View>
      <View style={{ flex: 1, marginHorizontal: 14 }}>
        <AddCategoryButton />
        <CategoriesList data={categories} />
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
