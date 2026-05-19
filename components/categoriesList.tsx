import { Category } from "@/app/categories";
import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Prop {
  data: Category[];
}

export default function CategoriesList({ data }: Prop) {
  const renderCategoryItem = ({ item }: { item: Category }) => {
    const isIncome = item.type == "income";

    return (
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <Text style={styles.categoryName}>{item.name}</Text>

          <View
            style={[
              styles.badge,
              isIncome ? styles.badgeIncome : styles.badgeExpense,
            ]}
          >
            <Text
              style={[
                styles.badgeText,
                isIncome ? styles.textIncome : styles.textExpense,
              ]}
            >
              {isIncome ? "Entrada" : "Saída"}
            </Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            onPress={() => console.log("Editar", item.id)}
            style={styles.actionButton}
          >
            <Ionicons name="pencil-outline" size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Deletar", item.id)}
            style={styles.actionButton}
          >
            <Ionicons name="trash-outline" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategoryItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: "#fffffff6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  categoryName: {
    fontSize: 16,
    color: "#121212",
    fontWeight: "600",
    marginBottom: 6,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeIncome: {
    backgroundColor: "rgba(76, 175, 79, 0.34)",
  },
  badgeExpense: {
    backgroundColor: "rgba(244, 67, 54, 0.2)",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  textIncome: {
    color: "#375d39",
  },
  textExpense: {
    color: "#8c3f3f",
  },
  actionsContainer: {
    flexDirection: "row",
  },
  actionButton: {
    marginLeft: 16,
    padding: 4,
  },
});
