import axios from "axios";
import createAction from "../utils/createAction";
import { setParam } from "./ui";
import REACT_APP_API_URL from "./config";

export const GET_ALL_GANDER = "GET_ALL_GANDER";


export const getGander = (genreName="") => {

    
         return async dispatch => {
           try {
             let res = await axios({
               method: "GET",
               url: `${REACT_APP_API_URL}ganers`
             });
             dispatch(createAction(GET_ALL_GANDER, res.data));
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