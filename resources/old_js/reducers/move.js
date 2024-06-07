import * as actionTypes from '../actions/move';

const initialState = {
  moves: {
    data: [],
    total: null,
    last_page: null,
    per_page: null,
    current_page: null
  },
  movesActors: {
    data: [{ actors_name: "" }],
    total: null,
    last_page: null,
    per_page: null,
    current_page: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_MOVE:
      return {
        ...state,
        moves: action.payload
      };
    case actionTypes.GET_ALL_MOVE_ACTORS:
      return {
        ...state,
        movesActors: action.payload
      };
    default:
      return state;
  }
} 