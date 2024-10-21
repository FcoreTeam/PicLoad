import axios from "axios"

const VITE_DEV_URL = import.meta.env.VITE_DEV_URL

const api = axios.create({
  baseURL: VITE_DEV_URL,
  timeout: 10000,
});

export const getUserData = async (tgId) => await api.get(`/api/?tg_id=${5106326939}`)

export const getUserCategoryData = async (tgId) => await api.get(`/api/categoryofuser?tg_id=${5106326939}`)

export const getErrorMessage = async () => await api.get("/api/randomError")

export const enterPromocode = async (tgId, code) => await api.put("/api/enterPromocode", {
  body: {
    tg_id: 5106326939,
    code: code
  }
}).catch(err => console.log(err))

// enterPromocode().then((res) => alert(res.data.success, res.data.error));