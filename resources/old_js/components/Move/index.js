/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useCallback, useReducer} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMove } from "../../actions/move.js";
import Pagination from "react-js-pagination";
import queryString from "query-string";
import ImageLoader from "react-load-image";
import TelegramLink from "../../../js/src/components/Telegram/Telegram";

function Preloader() {
  return <img src="/preloader.png"  />
}

function Move(props) {
  
  const dispatch = useDispatch();
  const values = queryString.parse(props.history.location.search);
  console.log(props.params)
  // @ts-ignore
  const { moves } = useSelector(({ move }) => ({
    moves: move.moves
  }));
  function serialize(obj, prefix) {
    var str = [],
      p;
    for (p in obj) {
      var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
      if (k && k != "undefined" && v != "") {
        str.push(
          v !== null && typeof v === "object"
            ? serialize(v, k)
            : encodeURIComponent(k) + "=" + encodeURIComponent(v)
        );
        
      }
    }
    return str.join("&");
  }
  const handleChange = useCallback(data => {
      const values = queryString.parse(props.history.location.search);
    
      values.page = data;
      props.history.push("?" + serialize(values));
   
  }, [dispatch]);


  useEffect(() => {
    const values = queryString.parse(props.history.location.search);
    console.log("123")

    dispatch(getAllMove(props.history, values, false, props.params.type, props.params.genreName));
  }, [dispatch, props.params.type, props.params.genreName,props.history.location.search]);

    const oprderBy = useCallback(data => {
      const values = queryString.parse(props.history.location.search);
      
      values.s = data.target.value;
      dispatch(getAllMove(props.history, values));
    }, [dispatch, props.history]);


  window.onpopstate = () => {
      dispatch(getAllMove(props.history, props.params,false));
  };

  return (
    <div className="col-md-8 col-sm-12 col-xs-12 movesBlok" >
      <div className="topbar-filter">
        <p>{moves.total} общее количество </p>
        <select id="sortBy" value={values.s} onChange={oprderBy}>
          <option value="false"> Сортировать по </option>
          <option value="imdbRating_desc" selected={values.s == "imdbRating_desc"} > Рейтинг по убыванию </option>
          <option value="imdbRating_asc" selected={values.s == "imdbRating_asc"} > Рейтинг по возрастанию </option>
          <option value="year_desc" selected={values.s == "year_desc"} > Дата по убыванию </option>
          <option value="year_asc" selected={values.s == "year_asc"} > Дата по возрастанию </option>
        </select>
      </div>
      
      <div className="pagination2">
        <Pagination
          activePage={moves.current_page}
          itemsCountPerPage={24}
          totalItemsCount={moves.total}
          pageRangeDisplayed={10}
          onChange={handleChange}
        />
      </div>
        <div className="col-md-12" style={{padding: "0", marginBottom: "20px"}}>
            <a href={TelegramLink}>
                <img src="/hg.jpg" alt="sharkion" title="sharkion" style={{width: "100%"}}/>
            </a>
        </div>

        <div className="flex-wrap-movielist">
        {moves.data.map(item => {
          return (
            <div className="movie-item-style-2 movie-item-style-1 mobalview"  key={item.id}>
              <Link to={"/films/" + item.id}>
                   <ImageLoader
                        src= { (() => {
                          var poster = item.poster.split("https://image.tmdb.org/t/p/w300");
                          if(item.poster.indexOf("https") == -1 || poster[1] == ""){
                               return "/preloader.png";
                          }else{
                              return item.poster;
                          }
                    })()} 
                      >
                        <img />
                        <div><img src="/preloader.png"  /></div>
                        <Preloader />
                      </ImageLoader>

                 
                <div className="hvr-inner pla type_value">
                  <img
                    className=""
                    alt="movie"
                    src="/assets/favicon_io/play.png"
                  />
                </div>
                <div className="hvr-inner" style={{ top: "inherit",bottom:" 80px"}}>
                  <div className="type_value">{item.quality}</div>
                </div>
                <div className="hvr-inner" style={{ opacity: "1" }}>
                  {(() => {
                    switch (item.type) {
                      case "movie": return <img className="type_image_value" alt="movie" src="/assets/front/images/film.svg" />
                      default: return <img className="type_image_value" alt="serial" src="/assets/front/images/serial.svg" />;
                    }
                  })()}
                  {(() => {
                    switch (item.type) {
                      case "movie": return <span className="type_value" style={{ display: "none" }} >Фильм</span>;
                      default: return <span className="type_value" style={{ display: "none" }} >Cериал</span>
                    }
                  })()}
                </div>
              </Link>
              <div className="mv-item-infor">
                <h6 className="title_move">
                  <Link to={"/films/" + item.id}>{item.title_ru}</Link>
                </h6>
                <p className="rate">
                  <i className="ion-android-star"></i>
                  <span>
                    {item.imdbRating}
                  </span>&nbsp;IMDB&nbsp;
                  
                  <span className="year_move">{item.year}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pagination2">
        <Pagination
          activePage={moves.current_page}
          itemsCountPerPage={24}
          totalItemsCount={moves.total}
          pageRangeDisplayed={10}
          onChange={handleChange}
        />
      </div>
        <div className="col-md-12">
            <a href={TelegramLink}>
                <img src="/hg.jpg" alt="sharkion" title="sharkion"/>
            </a>
        </div>
    </div>
);
}

export default Move;
