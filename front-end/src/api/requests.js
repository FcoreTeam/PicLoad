import axios from "axios"

const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API's base URL
  timeout: 10000, // Optional: Set a timeout for requests
});

export const getProfileData = async (tgId) => await api.get(`http://localhost:3000/api/?tg_id=${tgId}`)