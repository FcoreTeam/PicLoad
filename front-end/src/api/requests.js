import axios from "axios"

const DEV_URL = import.meta.env.DEV_URL

const api = axios.create({
  baseURL: DEV_URL,
  timeout: 10000,
});

export const getProfileData = async (tgId) => await api.get(`/?tg_id=${tgId}`)