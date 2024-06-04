import instanceAxios from "./axios";

/**
 *
 * @param {"Bebidas" | "Almuerzo" | "Desayuno"} tipo
 * @returns []
 */
export const getMenuByType = async (tipo = "Bebidas") => {
  const res = await instanceAxios.get("/menu", { params: { tipo } });
  return res.data;
};
