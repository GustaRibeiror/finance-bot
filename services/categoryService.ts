import api from "./api";

export async function getCategories() {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error: any) {
    console.log(error.response);
    console.log(error.response.data);
    throw new Error(error);
  }
}

export async function setNewCategory(name: string, type: "income" | "expense") {
  try {
    const response = await api.post("/categories", { name, type });
    if (response) {
      console.log(`Categoria criada corretamente: ${response.data.message}`);
    }

    return response.data;
  } catch (error: any) {
    console.log("Erro do Laravel:", error.response?.data);
    throw new Error(error.response?.data?.message || "Erro ao criar categoria");
  }
}
