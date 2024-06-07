import axios from 'axios';
import storage from '../lib/storage';
import createAction from '../utils/createAction';
import { setParam } from './ui';
import REACT_APP_API_URL from "./config";


export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCTS_LAST = 'GET_PRODUCTS_LAST';


export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      let res = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}products`
      });
      // history.push('/categories');
      dispatch(createAction(GET_ALL_PRODUCTS, res.data.data));
    } catch (err) {
      dispatch(setParam('errorModal', (err.response && err.response.data.message) ? err.response.data.message : 'Something went wrong'));
    }
  }
}
export const getAllProductsLast = () => {
  return async (dispatch) => {
    try {
      let res = await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}products/last`,
      });
      // history.push('/categories');
      dispatch(createAction(GET_PRODUCTS_LAST, res.data.data));
    } catch (err) {
      dispatch(setParam('errorModal', (err.response && err.response.data.message) ? err.response.data.message : 'Something went wrong'));
    }
  }
}

export const getProductesById = id => {
  return async (dispatch) => {
    try {
      let res = await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}products/${id}`,
        headers: {
          'Authorization': `${storage.get('accessToken')}`,
        }
      });
      dispatch(createAction(GET_PRODUCT, res.data.data));
    } catch (err) {
      dispatch(setParam('errorModal', (err.response && err.response.data.message) ? err.response.data.message : 'Something went wrong'));
    }
  }
}
export const getProductesByCatSlug = slug => {
  return async (dispatch) => {
    try {
      let res = await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}products/cat/${slug}`,
        headers: {
          'Authorization': `${storage.get('accessToken')}`,
        }
      });
      const products = res.data.data[0].productDetails.map(value=>{
        return value.product;
      })
      dispatch(createAction(GET_ALL_PRODUCTS, products));
    } catch (err) {

      dispatch(setParam('errorModal', (err.response && err.response.data.message) ? err.response.data.message : 'Something went wrong'));
    }
  }
}