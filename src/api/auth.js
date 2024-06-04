import instanceAxios from "./axios";

export const login = async (usuario, password) => {
  const response = await instanceAxios.post("/login", { usuario, password });
  return response.data;
};
