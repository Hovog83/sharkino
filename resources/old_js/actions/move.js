import axios from "axios";
import createAction from "../utils/createAction";
import { setParam } from "./ui";
import REACT_APP_API_URL from "./config";

export const GET_ALL_MOVE = "GET_ALL_MOVE";
export const GET_ALL_MOVE_ACTORS = "GET_ALL_MOVE_ACTORS";

function serialize(obj, prefix) {
  var str = [],
    p;
  for (p in obj) {
      var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
    if (k && k != "undefined" && v != "") {
        str.push((v !== null && typeof v === "object") ?
          serialize(v, k) :
          encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
  }
  return str.join("&");
}


export const getAllMoveActors = (history, params, id, historyCha = true) => {
         return async dispatch => {
           try {
             var url = `${REACT_APP_API_URL}movesActors/${id}?${serialize(params)}`;
             let res = await axios({
               method: "GET",
               url: url
             });
             dispatch(createAction(GET_ALL_MOVE_ACTORS, res.data));
             if (historyCha){
              history.push("/actors/" + id + "?" + serialize(params));
             }
             document.getElementById("preloader").style.display = "none";
             document.getElementById("status").style.display = "none";
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


export const getAllMove = (history, params, historyCha = true, type=false, genreName="") => {

        document.getElementById("preloader").style.display = "block";
        document.getElementById("status").style.display = "block";
        let page_p = 1;
          if (params.page === 0){
            page_p = 1;
          }
         return async dispatch => {
           try {
             if (type) {
               var url = `${REACT_APP_API_URL}moves/genre?page=1&type=${type}&genreName=${genreName}&${serialize(params)}`;
             } else {
               var url = `${REACT_APP_API_URL}moves?page=1&${serialize(params)}`;
             }
             let res = await axios({
               method: "GET",
               url: url
             });
             dispatch(createAction(GET_ALL_MOVE, res.data));
             if (historyCha){
               history.push("?"+serialize(params));
             }

             document.getElementById("preloader").style.display = "none";
             document.getElementById("status").style.display = "none";
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