import axios from 'axios'
import config from './config'

const API = axios.create({
  baseURL: config.api_url,
})

export default API
