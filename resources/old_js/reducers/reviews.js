import * as actionTypes from '../actions/reviews';

const initialState = {
  reviews: [],
  review: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case actionTypes.GET_REVIEWS:
      return {
        ...state,
        review: action.payload,
      };
    default:
      return state;
  }
} 