import axios from 'axios';

const APIBFF = process.env.NEXT_PUBLIC_API_URL; // <-- Aqui va la url base de API de BFF

const api = axios.create({
  baseURL: APIBFF,
});

export default api;
