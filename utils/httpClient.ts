import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.NEXT_API_URL,
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default httpClient;
