import axios from "axios"

const baseURL = import.meta.env.VITE_CRYPTO_COIN_URL

export const coinGecko = axios.create({ baseURL })