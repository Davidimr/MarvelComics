import axios from "axios";
import md5 from "md5";

const API_URL = import.meta.env.VITE_API;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptador para adicionar os parametros comuns necessarios para identificação da aplicação na API da marvel.
api.interceptors.request.use((config) => {
    //adicionar o time stamp
  const ts = String(new Date().getTime());
  // transforma o timestamp a chave publica e a chave privada em MD5
  const hash = md5(ts + PRIVATE_KEY+ PUBLIC_KEY);
  
  const params = {
    ts,
    apikey: PUBLIC_KEY,
    hash,
  };

  
  config.params = {
    ...config.params,
    ...params
  }

  return config
});

export default api;
