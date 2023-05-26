import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export function getRequest(URL) {
  return axiosClient
    .get(`/${URL}`)
    .then((response) => response)
    .catch((response) => response);
}

export function postRequest(URL, payload) {
  return axiosClient
    .post(`/${URL}`, payload)
    .then((response) => response)
    .catch((response) => response);
}

export function patchRequest(URL, payload) {
  return axiosClient
    .patch(`/${URL}`, payload)
    .then((response) => response)
    .catch((response) => response);
}

export function deleteRequest(URL) {
  return axiosClient
    .delete(`/${URL}`)
    .then((response) => response)
    .catch((response) => response);
}
