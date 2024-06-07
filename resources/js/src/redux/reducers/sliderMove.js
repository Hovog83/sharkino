import {
    FETCH_MOVES_REQUEST,
    FETCH_MOVES_SUCCESS,
    FETCH_MOVES_FAILURE
  } from './moveActions';
  
  const initialState = {
    moves: [],
    loading: false,
    error: null
  };
  
  const moveReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_MOVES_SUCCESS:
        return {
          ...state,
          move: action.payload,
          loading: false,
          error: null
        };
      case FETCH_MOVES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default moveReducer;
  