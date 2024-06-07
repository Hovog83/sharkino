import axios from "axios";
import createAction from "../utils/createAction";
import { setParam } from "./ui";
import REACT_APP_API_URL from "./config";
export const GET_RECOMMENDEDS = "GET_RECOMMENDEDS";


export const getRecommendeds = () => { 
         return async dispatch => {
           try {
             let res = await axios({
               method: "GET",
               url: `${REACT_APP_API_URL}recommendeds`
             });
             dispatch(createAction(GET_RECOMMENDEDS, res.data));
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