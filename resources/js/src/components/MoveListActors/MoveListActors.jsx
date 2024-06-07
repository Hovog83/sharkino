import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import queryString from "query-string";
import Pagination from "react-js-pagination";
import ImageLoader from "../ImageLoader/ImageLoader";
import history from "../../utils/history";
import { getAllMoveActors } from "../../redux/actions/move";
import TelegramLink from "../Telegram/Telegram";

const MoveListActors = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movesActors } = useSelector((state) => state.move);

  useEffect(() => {
    const params = queryString.parse(history.location.search);
    dispatch(getAllMoveActors(id, params, false));
  }, [dispatch, history, id, history.location.search]);

  const handleChange = (pageNumber) => {
    const params = { ...queryString.parse(history.location.search), page: pageNumber };
    dispatch(getAllMoveActors(id, params));
  };
  return (
      <div>
          <Helmet>
              <title>SharKino | {movesActors?.data[0]?.actors_name || "Actor Details"}</title>
          </Helmet>
          <div>
          </div>
              <a href={TelegramLink}>
                  <img src="/hg.jpg" alt="sharkion" title="sharkion"/>
              </a>
              <div id="preloader">
                  <div id="status">
                      <span></span>
                      <span></span>
                  </div>
              </div>

              <div className="col-md-3 col-sm-12 col-xs-12">
                  <div className="user-img">
                      <ImageLoader src={`https://image.tmdb.org/t/p/w500${movesActors?.data[0]?.actors_image}`}/>
                      <h2 className="nameActors">{movesActors?.data[0]?.actors_name}</h2>
                  </div>
              </div>
              <div className="col-md-8 col-sm-12 col-xs-12">
                  <div className="topbar-filter">
                      <p>{movesActors.total} total</p></div>
                  <div className="pagination2">
                      <Pagination
                          activePage={movesActors.current_page}
                          itemsCountPerPage={20}
                          totalItemsCount={movesActors.total}
                          pageRangeDisplayed={10}
                          onChange={handleChange}
                      />
                  </div>
                  <div className="flex-wrap-movielist">
                      {movesActors.data.map((item) => (
                          <div key={item.id} className="movie-item-style-2 movie-item-style-1">
                              <Link to={`/films/${item.id}`}>
                                  <ImageLoader src={item.poster}>
                                      <img className="poster" alt="poster"/>
                                      <div>
                                          <img src="/placeholder.png" alt="placeholder"/>
                                      </div>
                                  </ImageLoader>
                                  <div className="hvr-inner pla type_value">
                                      <img
                                          className=""
                                          alt="movie"
                                          src="/images/favicon_io/play.png"
                                      />
                                  </div>
                                  <div
                                      className="hvr-inner"
                                      style={{top: "inherit", bottom: " 80px"}}>
                                      <div className="type_value">{item.quality}</div>
                                  </div>
                                  <div className="hvr-inner" style={{opacity: "1"}}>
                                      {item.type === "movie" ? (
                                          <>
                                              <img className="type_image_value" alt="movie" src="/images/film.svg"/>
                                              <span className="type_value" style={{display: "none"}}>Фильм</span>
                                          </>
                                      ) : (
                                          <>
                                              <img className="type_image_value" alt="serial" src="/images/serial.svg"/>
                                              <span className="type_value" style={{display: "none"}}>Cериал</span>
                                          </>
                                      )}
                                  </div>

                              </Link>
                              <div className="mv-item-infor">
                                  <h6 className="title_move">
                                      <Link to={"/move/" + item.id}>{item.title_ru}</Link>
                                  </h6>
                                  <p className="rate">
                                      <i className="ion-android-star"></i>
                                      <span>{item.imdbRating}</span>&nbsp;IMDB&nbsp;
                                      <span className="year_move">{item.year}</span>
                                  </p>
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className="pagination2">
                      <Pagination
                          activePage={movesActors.current_page}
                          itemsCountPerPage={20}
                          totalItemsCount={movesActors.total}
                          pageRangeDisplayed={10}
                          onChange={handleChange}/>
                  </div>
              </div>
      </div>
);
}

export default MoveListActors;
