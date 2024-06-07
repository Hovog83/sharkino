/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMove } from "../../actions/getMove.js";
import ImageInfo  from "./ImageInfo.js";
import Trailer from "./Trailer.js";
import Moveinfo from "./Moveinfo.js";
import { Helmet } from "react-helmet";
import TelegramLink from "../../../js/src/components/Telegram/Telegram";



function FilmsComponent(props) {

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
    console.log(href);
  }
  return (
    <div>
      <Helmet>
        <title>
          SharKino | {getMoveObj.title_ru} | {getMoveObj.title_orig}
        </title>
      </Helmet>
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="col-md-3 col-sm-12 col-xs-12">
          <ImageInfo move={getMoveObj} />
          {/* to do */}
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
                  <img src="/vg.jpg" alt="sharkion" title="sharkion"/>
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
                      <li className="active" key="{key}">
                        <a
                          onClick={handleClick.bind(this)}
                          href="#"
                          data-index={key}
                        >
                          player {key + 1}{" "}
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
                          player {key + 1}{" "}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
              <div className="tab-content">
                {getMoveObj.get_iframe.map((item, key) => {
                  if (key == active) {
                    return (
                      <div id={"#player_" + (key + 1)}  key="{key}" className="tab active">
                        <div className="row">
                          <iframe
                            className="iframe"
                            title={key + 1}
                            src={"/iframe/"+item.id}
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
                      <div id={"#player_" + key + 1}   key="{key}" className="tab">
                        <div className="row">
                          <iframe
                            className="iframe"
                            title={key + 1}
                            data-url={item.iframe_url}
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
              <div className="col-md-12" style={{padding: "0", marginBottom: "20px"}}>
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
