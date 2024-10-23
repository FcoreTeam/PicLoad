import axios from "axios"
import { getIdFromAddress } from "../helpers/helpers";

const VITE_DEV_URL = import.meta.env.VITE_DEV_URL

const api = axios.create({
  baseURL: VITE_DEV_URL,
  timeout: 10000,
});

// 5106326939

export const getUserData = async () => {
  const tgId = getIdFromAddress()
  return await api.get(`/api/?tg_id=${5106326939}`)
}

export const getUserCategoryData = async () => {
  const tgId = getIdFromAddress()
  return await api.get(`/api/categoryofuser?tg_id=${5106326939}`)
}

export const getErrorMessage = async () => await api.get("/api/randomError")

export const sendPromocode = async (code) => {
  const tgId = getIdFromAddress()
  console.log(code, typeof code)
  return await api.put("/api/enterPromocode", {
    tg_id: 5106326939,
    code: code
  }).catch(err => console.log(err))
}

// enterPromocode().then((res) => alert(res.data.success, res.data.error));