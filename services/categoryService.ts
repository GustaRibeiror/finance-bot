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
