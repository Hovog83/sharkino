// import axios from 'axios';

// export const FETCH_MOVES_REQUEST = 'FETCH_MOVES_REQUEST';
// export const FETCH_MOVES_SUCCESS = 'FETCH_MOVES_SUCCESS';
// export const FETCH_MOVES_FAILURE = 'FETCH_MOVES_FAILURE';

// export const fetchMovesRequest = () => ({
//   type: FETCH_MOVES_REQUEST
// });

// export const fetchMovesSuccess = (move) => ({
//   type: FETCH_MOVES_SUCCESS,
//   payload: move
// });

// export const fetchMovesFailure = (error) => ({
//   type: FETCH_MOVES_FAILURE,
//   payload: error
// });

// export const fetchMoves = () => {
//   return async (dispatch) => {
//     dispatch(fetchMovesRequest());
//     try {
//       const response = await axios.get('https://sharkino.com/api/moves');
//       const move = response.data;
//       dispatch(fetchMovesSuccess(move));
//       document.getElementById("preloader").style.display = "none";
//       document.getElementById("status").style.display = "none";
//     } catch (error) {
//       dispatch(fetchMovesFailure(error.message));
//     }
//   };
// };
