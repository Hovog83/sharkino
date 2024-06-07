import axios from "axios";
import createAction from "../utils/createAction";
import { setParam } from "./ui";
import REACT_APP_API_URL from "./config";
export const GET_MOVE = "GET_MOVE";


export const getMove = (id) => {
         return async dispatch => {
           try {
             let res = await axios({
               method: "GET",
                 url: `${REACT_APP_API_URL}move/${id}`
             });
               dispatch(createAction(GET_MOVE, res.data));
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