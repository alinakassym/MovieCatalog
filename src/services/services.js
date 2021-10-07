import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'd74bc6a82872cc36bd4038488460396e';

export const getPopularMovies = async () => {
  const r = await axios.get('' +
  `${apiUrl}movie/popular?api_key=${apiKey}`);
  return r.data.results;
};

export const getUpcomingMovies = async () => {
  const r = await axios.get('' +
  `${apiUrl}movie/upcoming?api_key=${apiKey}`);
  return r.data.results;
};

export const getPopularTv = async () => {
  const r = await axios.get('' +
  `${apiUrl}tv/popular?api_key=${apiKey}`);
  return r.data.results;
};

export const getFamilyMovies = async () => {
  const r = await axios.get('' +
  `${apiUrl}discover/movie?api_key=${apiKey}&with_genres=10751`);
  return r.data.results;
};
