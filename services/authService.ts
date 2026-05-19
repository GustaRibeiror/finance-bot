import api from "./api";

export async function login(email: string, password: string) {
  try {
    const response = await api.post("/login", {
      email: email,
      password: password,
    });

    return response.data;
  } catch (error) {
    console.log(`Erro no login: ${error}`);
    throw error;
  }
}
