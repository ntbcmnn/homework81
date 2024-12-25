import axios from 'axios';
import { api_URL } from './globalConst.ts';

const axiosApi = axios.create({
  baseURL: api_URL,
});

export default axiosApi;