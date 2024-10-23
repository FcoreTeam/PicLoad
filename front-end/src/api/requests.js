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
  return await api.get(`/api/?tg_id=${tgId}`)
}

export const getUserCategoryData = async () => {
  const tgId = getIdFromAddress()
  return await api.get(`/api/categoryofuser?tg_id=${tgId}`)
}

export const sendPromocode = async (code) => {
  const tgId = getIdFromAddress()
  return await api.put("/api/enterPromocode", {
    tg_id: tgId,
    code: code
  }).catch(err => console.log(err))
}

export const getErrorMessage = async () => await api.get("/api/randomError").catch(err => console.log(err))

export const sendImages = async (photos, categoryTitle) => {
  const tgId = getIdFromAddress()
  return await api.put("/api/uploadimage", {
    tg_id: tgId,
    photos,
    cat_title: categoryTitle
  }).catch(err => console.log(err))
}