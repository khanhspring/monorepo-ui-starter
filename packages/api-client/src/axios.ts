import axios, { AxiosInstance } from "axios";

export const createAxios = (
  baseURL: string,
  getAccessToken?: () => string | undefined,
  getApiKey?: () => string | undefined
): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Attach token to every request
  instance.interceptors.request.use((config) => {
    const token = getAccessToken?.();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const apiKey = getApiKey?.();
    if (apiKey) {
      config.headers['X-Api-Key'] = `${apiKey}`;
    }
    return config;
  });

  // Optional: global error handler
  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      // You can customize this
      return Promise.reject(err.response?.data || err.message);
    }
  );

  return instance;
};