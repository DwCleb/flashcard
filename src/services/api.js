import axios from 'axios';
import Utils from 'utils/utils';

const api = axios.create({
  baseURL: Utils.api(), 
});

export default api;
