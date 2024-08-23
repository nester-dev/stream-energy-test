import axios from "axios";

export const baseURL = import.meta.env.VITE_API_URL;

export const instance = axios.create({
  baseURL,
});
