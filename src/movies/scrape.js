import axios from 'axios';

export const MOVIE_DB_API_KEY = process.env.MOVIE_DB_API_KEY;
export const MOVIE_API_URL = 'https://api.themoviedb.org/3';
export const MOVIE_URL = `${MOVIE_API_URL}/movie`;
export const MOVIE_DB_SEARCH_URL = `${MOVIE_API_URL}/search/movie?api_key=${MOVIE_DB_API_KEY}`;
export const SEARCH_URL = `${MOVIE_API_URL}/search/movie?api_key=${MOVIE_DB_API_KEY}`;

export const add = movies =>
  axios.post('http://localhost:3000/api/movies', movies).then(console.log);

export const search = ({ title: query } = { title: 'matrix' }) =>
  axios
    .get(SEARCH_URL, { params: { query }})
    .then(({ data }) => data.results)
    .then(add)
    .catch(console.error);

// axios.get('/').then(console.log);
