import axios from "axios"

const SERVER_BASE_URL = process.env.SERVER_BASE_URL
const SERVER_PORT = process.env.SERVER_PORT

const api = axios.create({
  baseURL: `${SERVER_BASE_URL}:${SERVER_PORT}`,
  timeout: 10000,
});

export const getProfileData = async (tgId) => await api.get(`/api/?tg_id=${tgId}`)