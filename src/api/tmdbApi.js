import axios from 'axios';

const API_KEY = '5ce599886a4c0703a030654068991e03';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const END_POINTS = {
  TRENDING: '/trending/movie/day',
  SEARCH_MOVIE: '/search/movie',
  DETAILS: '/movie/',
};

export const getTrending = async () => {
  const request = await axios.get(
    `${END_POINTS.TRENDING}?api_key=${API_KEY}&language=en-US&page=1&time_window=week`
  );
  return request.data;
};

export const getSearchMovie = async query => {
  const request = await axios.get(
    `${END_POINTS.SEARCH_MOVIE}?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
  );
  return request.data;
};

export const getMovieDetails = async id => {
  const request = await axios.get(`${END_POINTS.DETAILS}${id}?api_key=${API_KEY}`);
  return request.data;
};

export const getMovieActors = async id => {
  const request = await axios.get(`${END_POINTS.DETAILS}${id}/credits?api_key=${API_KEY}`);
  return request.data;
};

export const getMovieReviews = async id => {
  const request = await axios.get(`${END_POINTS.DETAILS}${id}/reviews?api_key=${API_KEY}`);
  return request.data;
};
