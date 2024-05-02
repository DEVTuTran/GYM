import axios from 'axios'
import { AUTH_API_URL, AUTH_API_KEY } from 'configs/env'

const axiosAuthClient = axios.create({
  baseURL: `${AUTH_API_URL}/`,
  headers: {
    'Content-type': 'application/json; charset=utf-8',
    'x-api-key': AUTH_API_KEY
  }
})

axiosAuthClient.interceptors.response.use(
  function (response) {
    return response?.data ?? {}
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axiosAuthClient
