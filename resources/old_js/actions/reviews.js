import axios from "axios";
import storage from "../lib/storage";
import createAction from "../utils/createAction";
import { setParam } from "./ui";
import REACT_APP_API_URL from "./config";

export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
export const GET_REVIEWS = "GET_REVIEWS";

export const getAllReviews = () => {
  return async dispatch => {
    try {
      let res = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}reviews`
      });
      dispatch(createAction(GET_ALL_REVIEWS, res.data.data));
    } catch (err) {
      dispatch(
        setParam(
          "errorModal",
          err.response && err.response.data.message
            ? err.response.data.message
            : "Something went wrong"
        )
      );
    }
  };
};
export const getReviewsesById = id => {
  return async dispatch => {
    try {
      let res = await axios({
        method: "GET",
        url: `${REACT_APP_API_URL}reviews/${id}`,
        headers: {
          Authorization: `${storage.get("accessToken")}`
        }
      });
      dispatch(createAction(GET_REVIEWS, res.data.data));
    } catch (err) {
      dispatch(
        setParam(
          "errorModal",
          err.response && err.response.data.message
            ? err.response.data.message
            : "Something went wrong"
        )
      );
    }
  };
};
