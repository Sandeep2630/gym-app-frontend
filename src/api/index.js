import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
