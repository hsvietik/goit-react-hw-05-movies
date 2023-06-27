import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1bfc473de4fefb6be0222ae7c51b95d7';

export async function fetchTrendMovies() {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const response = await axios.get(`${BASE_URL}trending/movie/day`, {
    params: params,
  });
  return response.data;
}

export async function fetchMovies({ abortCtrl, query }) {
  const params = {
    api_key: API_KEY,
    query: query,
    language: 'en-US',
    include_adult: false,
  };
  const response = await axios.get(`${BASE_URL}search/movie`, {
    signal: abortCtrl.signal,
    params: params,
  });
  return response.data;
}
