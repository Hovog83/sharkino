import axios from "axios";
import REACT_APP_API_URL from "./config";
import queryString from "query-string";
import history from "../../utils/history";
import createAction from "../../utils/createAction";
import { setParam } from "./ui";
export const GET_ALL_MOVE = "GET_ALL_MOVE";
export const GET_ALL_MOVE_ACTORS = "GET_ALL_MOVE_ACTORS";


export const getAllMoveActors = (id, params, historyCha = true) => {
  return async (dispatch) => {
    try {
      const url = `${REACT_APP_API_URL}movesActors/${id}?${queryString.stringify(params)}`;
      const allActors = await axios.get(url);
      dispatch({
        type: GET_ALL_MOVE_ACTORS,
        payload: allActors.data,

      });
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
      if (historyCha) {
        history.push(`/actors/${id}?${queryString.stringify(params)}`);
      }
    } catch (error) {
      console.error('Error fetching move actors:', error);
    }
    
  };
};


export const getAllMove = (history, params, historyCha = true, type=false, genreName="",) => {

  document.getElementById("preloader").style.display = "block";
  document.getElementById("status").style.display = "block";

   return async dispatch => {
     try {
       if (type) {
        var url = `${REACT_APP_API_URL}moves/genre?page=1&type=${type}&genreName=${genreName}&${queryString.stringify(params)}`;
       } else {
         var url = `${REACT_APP_API_URL}moves?${queryString.stringify(params)}`;
       }
       let res = await axios({
         method: "GET",
         url: url
       });
       dispatch(createAction(GET_ALL_MOVE, res.data));
       
       if (historyCha){
         history.push("?"+queryString.stringify(params));
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



