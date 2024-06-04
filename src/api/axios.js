import axios from "axios";
const BASE_URL = "http://192.168.1.106:3000/api";

const instanceAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instanceAxios;
