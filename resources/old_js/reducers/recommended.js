import * as actionTypes from '../actions/recommendeds';

const initialState = {
  recommendeds: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RECOMMENDEDS:
      return {
        ...state,
        recommendeds: action.payload
      };
    default:
      return state;
  }
} 