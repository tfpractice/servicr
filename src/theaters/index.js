export { default } from './service';
import axios from 'axios';

//
// const getMovies=({  query, } ) => (dispatch) => {
//   console.log('query', query);
//   return Promise.resolve(dispatch(searchRequestPending(query)))
//     .then(() =>
//       axios.get(SEARCH_URL, { params: { query, append_to_response: 'images', }, })
//         .then(getData)
//         .then(tapResults)
//         .then(r => console.log('SEARCH_URL res success\n', r.length, '\n') || r)
//         .then(results => Promise.all(
//           [ searchRequestSuccess(query),
//             updateResults(...results),
//             getMovieReviews(...keySet(results)), ].map(dispatch))
//           .then(() => results)))
//     .catch(e => dispatch(searchRequestFailure(e.message)));
