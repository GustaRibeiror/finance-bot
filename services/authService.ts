import api from "./api";

export async function login(email: string, password: string) {
  try {
    const response = await api.post("/login", {
      email: email,
      password: password,
    });

    return response.data;
  } catch (error: any) {
    if (error.response) {
      const message = error.response.data.message;
      throw new Error(message || "Erro de comunicação com o vidor");
    }

    throw new Error("Não foi possível conectar com o servidor");
  }
}
