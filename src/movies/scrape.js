import axios from 'axios';

// const axios = axinstance.create({ baseURL: 'https://localhost:3000' });

export const MOVIE_DB_API_KEY = process.env.MOVIE_DB_API_KEY;
export const MOVIE_API_URL = 'https://api.themoviedb.org/3';
export const MOVIE_URL = `${MOVIE_API_URL}/movie`;
export const MOVIE_DB_SEARCH_URL = `${MOVIE_API_URL}/search/movie?api_key=${MOVIE_DB_API_KEY}`;
export const SEARCH_URL = `${MOVIE_API_URL}/search/movie?api_key=${MOVIE_DB_API_KEY}`;

//
// export const getMovieUrl = id =>
//   `${MOVIE_URL}/${id}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
export const add = movies =>
  axios
    .post('http://localhost:3000/api/movies', movies)
    .then(({ data }) => data)
    .then(console.log);

export const search = ({ title: query } = { title: 'matrix' }) => {
  console.log('query', query);
  return (
    axios
      .get(SEARCH_URL, { params: { query }})
      .then(({ data }) => data)
      .then(d => d.results[0])
      .then(add)

      // .then(console.log)

      // .then(r => console.log('SEARCH_URL res success\n', r.length, '\n') || r)
      // .then(results =>
      //   Promise.all(
      //     [
      //       searchRequestSuccess(query),
      //       updateResults(...results),
      //       getMovieReviews(...keySet(results)),
      //     ].map(dispatch)
      //   ).then(() => results)
      // )
      .catch(console.error)
  );
};

// search();
