import axios from "axios";
import { apiBaseUrl } from "./apis";
const apiInstance = () => {
  const api = axios.create({
    baseURL: apiBaseUrl,
  });

  api.interceptors.request.use(async (config) => {
    let accessToken = localStorage.getItem("token");
    // let accessToken = localStorage.getItem(localStorageConstants.accessToken);
    if (accessToken) {
      if (config.method !== "OPTIONS") {
        config.headers.authorization = `Bearer ${accessToken}`;
        config.headers["x-user-id"] = "Harry Potter";
      }
    }
    return config;
  });
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      throw error;
    }
  );
  return api;
};
const apiClient = apiInstance();

export default apiClient;

// google-chrome  --user-data-dir=”/var/tmp/Chrome” --disable-web-security
