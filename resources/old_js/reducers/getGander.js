import * as actionTypes from "../actions/getGander";

const initialState = {
  gander: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_GANDER:
      return {
        ...state,
        gander: action.payload
      };
    default:
      return state;
  }
} 