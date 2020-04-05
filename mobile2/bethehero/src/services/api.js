import axios from 'axios';

const api = axios.create({
  baseURL: 'http>//192.168.1.7:3333' //colocar o IP que esta sendo exibido dentro do AXIOS
});

export default api;

