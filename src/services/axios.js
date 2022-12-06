import axios from 'axios';
import { getLocalStorage, getSessionStorage } from '../utils/storage/storage';

const BASE_API_URL = process.env.REACT_APP_API_URL + 'api';
// let BASE_API_URL = 'https://vninspect.asia/api';
const token = getLocalStorage('user')?.token || getSessionStorage('user')?.token;

const instance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'auth-token': token,
  }
});

export default instance;