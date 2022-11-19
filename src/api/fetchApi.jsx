import axios from 'axios';
const KEY_API = '7f81b421d3976fbe9f06c97466f3842d';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY_API}`
  );
  return response.data;
};

export const getMoviesBySearch = async (query, page = 1) => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY_API}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  console.log(response.data);
};
