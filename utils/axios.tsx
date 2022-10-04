import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://wknd-take-home-challenge-api.herokuapp.com";

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
  timeout: 10000000,
  withCredentials: true,
});

request.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

export default request;
