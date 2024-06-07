import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMove } from "../../redux/actions/getMove.js";
import ImageInfo from "./ImageInfo.jsx";
import Trailer from "./Trailer.jsx";
import Moveinfo from "./MoveInfo.jsx";
import { Helmet } from "react-helmet";
import CommentsPlugin from "../CommentsPlugin/CommentsPlugin.jsx";
import { useParams } from "react-router-dom";
import TelegramLink from "../Telegram/Telegram"

const FilmsComponent = (props) => {
  const { id } = useParams()
  const filmUrl = `https://sharkino.com/films/${id}`;
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const { getMoveObj } = useSelector(({ getMove }) => ({
    getMoveObj: getMove.getMove
  }));
  useEffect(() => {
    dispatch(getMove(props.id));
  }, [dispatch, props.id]);

  function handleClick(e) {
    e.preventDefault();
    let this_ = e.target;
    let href = this_.getAttribute("data-index");
    setActive(href);
  }
  const backdropPath = getMoveObj.backdrop_path ? `https://image.tmdb.org/t/p/original${getMoveObj.backdrop_path}` : '';

  return (
    <div className="background-container" style={{ 
      // backgroundImage: `url(${backdropPath})`,
      }} >
      <Helmet>
        <title>
          SharKino | {getMoveObj.title_ru} | {getMoveObj.title_orig}
        </title>
      </Helmet>
      <div id="preloader">
        <div id="status">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="col-md-3 col-sm-12 col-xs-12">
          <ImageInfo move={getMoveObj} />
          <Trailer move={getMoveObj} />
        </div>
        <div className="col-md-6">
          <div className="">
            <p className="rate"></p>
          </div>
          <Moveinfo move={getMoveObj} />
        </div>
        <div className="col-md-3">
          <a href={TelegramLink}>
            <img src="/vg.jpg" alt="sharkion" title="sharkion" style={{height: 'auto', width: ''}}/>
          </a>
        </div>
      </div>
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="t-row iframe">
          <div className="movie-tabs">
            <div className="tabs">
              <ul className="tab-links tabs-mv">
                {getMoveObj.get_iframe.map((item, key) => {
                  if (key == active) {
                    return (
                      <li className="active" key={key}>
                        <a
                          onClick={handleClick.bind(this)}
                          href="#"
                          data-index={key}
                        >
                          ПЛЕЕР  {key + 1}{" "}
                        </a>
                      </li>
                    );
                  } else {
                    return (
                      <li className="" key="{key}">
                        <a
                          onClick={handleClick.bind(this)}
                          href="#"
                          data-index={key}
                        >
                          ПЛЕЕР  {key + 1}{" "}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
              <div className="tab-content">
                {getMoveObj.get_iframe.map((item, key, id) => {
                  if (key == active) {
                    return (
                      <div id={"#player_" + (key + 1)} key="{key}" className="tab active">
                        <div className="row">
                          <iframe
                            className="iframe"
                            title={key + 1}
                            src={item.iframe_url}
                            width="100%"
                            height="500"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div id={"#player_" + key + 1} key="{key}" className="tab">
                        <div className="row">
                          <iframe
                            className="iframe"
                            title={key + 1}
                            src={item.iframe_url}
                            width="100%"
                            height="480"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <CommentsPlugin filmUrl={filmUrl} />
            <div className="col-md-12" style={{ padding: "0", marginBottom: "20px" }}>
              <a href={TelegramLink}>
                <img src="/hg.jpg" alt="sharkion" title="sharkion" style={{width: "100%"}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmsComponent;
