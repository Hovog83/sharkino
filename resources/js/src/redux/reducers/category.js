import * as actionTypes from '../actions/category';

const initialState = {
  categories: [],
  category: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case actionTypes.GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
} 