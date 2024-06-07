import axios from 'axios';
import storage from '../lib/storage';
import createAction from '../utils/createAction';
import { setParam } from './ui';
import REACT_APP_API_URL from "./config";
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_CATEGORY = 'GET_CATEGORY';

export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      let res = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}categories`
      });
      dispatch(createAction(GET_ALL_CATEGORIES, res.data.data));
    } catch (err) {
      dispatch(setParam('errorModal', (err.response && err.response.data.message) ? err.response.data.message : 'Something went wrong'));
    }
  }
}

export const getCategoriesById = ({id}) => {
  return async (dispatch) => {
    try {
      let res = await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}category/${id}`,
        headers: {
          'Authorization': `${storage.get('accessToken')}`,
        }
      });
      dispatch(createAction(GET_CATEGORY, res.data.data));
    } catch (err) {
      dispatch(setParam('errorModal', (err.response && err.response.data.message) ? err.response.data.message : 'Something went wrong'));
    }
  }
}