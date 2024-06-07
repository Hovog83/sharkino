import React from "react";
import Header from "../../components/Header";
import Gender from "../../components/Gender";
import MoveList from "../../components/Move";
import Recommendedlist from "../../components/Recommendedlist";
import Filter from "../../components/Filter";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TelegramLink from "../../../js/src/components/Telegram/Telegram";

function Homepage(props) {
    let type = "";
    let genreName = "Смотрите фильмы в HD качестве";
    if (props.match.params.genreName) {
     genreName = props.match.params.genreName;
     type = props.match.params.type;
    }
  return (
    <div>
      <Helmet>
        <title> SharKino | {type} - {genreName} </title>
        <meta name="og:title" content="SharKino Смотрите фильмы в HD качестве" />
        <meta name="og:description" content="Присоединяйтесь к нам и зовите друзей, чтобы вместе с sharKino отправиться в волшебный и увлекательный мир Смотреть фильмы онлайн!" />
      </Helmet>
      <div id="preloader">
        <div id="status">
          <span></span>
          <span></span>
        </div>
      </div>
      <Header />
      <div className="hero common-hero hid">
        <div className="container filter">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <br/>
                <Filter history={props.history} params={props.match.params} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single">
        <div className="container">
          <Gender history={props.history} params={props.match.params} />
          <div className="row ipad-width">
            <MoveList history={props.history} params={props.match.params} />
            <Recommendedlist />
            <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="sidebar">
                    <a href={TelegramLink}>
                        <img src="/vg.jpg" alt="sharkion" title="sharkion" style={{width: "100%"}}/>
                    </a>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Homepage;
