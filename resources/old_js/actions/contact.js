import axios from "axios";
import createAction from "../utils/createAction";
import { setParam } from "./ui";
import REACT_APP_API_URL from "./config";
export const CREATE_CONTACT = "CREATE_CONTACT";

export const createContact = (data) => {
  return async dispatch => {
    try {
      let res = await axios({
        method: "POST",
        url: `${REACT_APP_API_URL}contact/create`,
        data
      });
      dispatch(createAction(CREATE_CONTACT, res.data.data));
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
