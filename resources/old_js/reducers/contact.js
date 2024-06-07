import * as actionTypes from "../actions/contact";

const initialState = {
  contact: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    default:
      return state;
  }
};
