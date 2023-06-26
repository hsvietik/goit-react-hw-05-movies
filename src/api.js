import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1bfc473de4fefb6be0222ae7c51b95d7';
export async function fetchTrendMovies({ abortCtrl }) {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };

  const response = await axios.get(`${BASE_URL}trending/movie/day`, {
    signal: abortCtrl.signal,
    params: params,
  });

  return response.data;
}
