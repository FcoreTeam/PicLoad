import axios from "axios"

const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

export const getProfileData = async (tgId) => await api.get(`http://localhost:3000/api/?tg_id=${tgId}`)