import axios from "axios";
  
let store;

export const injectStore = (_store) => {
  store = _store;
};

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const auth = store.getState().auth || null;
  if (auth) {
    config.headers["access-token"] = auth.token;
    config.headers["client"] = auth.client;
    config.headers["uid"] = auth.uid;
  }
  return config;
});

export default api;
