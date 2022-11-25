import axios from 'axios';
const KEY_API = '7f81b421d3976fbe9f06c97466f3842d';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY_API}`
  );
  return response.data;
};

export const getMoviesBySearch = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY_API}&query=${query}
    &language=en-US&page=1&include_adult=false`
  );
  return response.data;
};

export const getMovie = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY_API}&language=en-US`
  );
  return response.data;
};

export const getGenres = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY_API}&language=en-US`
  );
  return response.data;
};
