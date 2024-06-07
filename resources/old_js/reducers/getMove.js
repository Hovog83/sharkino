import * as actionTypes from '../actions/getMove';

const initialState = {
  getMove: {
    get_iframe: [],
    get_country: [{
      
    }],
    get_genre: [
      {
        get_genre:{
          genre_name: "Action",
          genre_name_ru: "Боевик"
        }
      }
    ],
    get_actors: [],
    get_director: [],
    title_ru: "",
    title_en: "",
    genre_name: "",
    poster:"",
    title_orig:"",
    kinopoisk_id:"",
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.GET_MOVE:
        return {
            ...state,
            getMove: action.payload
        };
    default:
      return state;
  }
} 