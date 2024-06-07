import * as actionTypes from "../actions/product";

const initialState = {
  products: [],
  product: {},
  last: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case actionTypes.GET_PRODUCTS_LAST:
      return {
        ...state,
        last: action.payload
      };
    default:
      return state;
  }
};
