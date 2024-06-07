import React from "react";
import Header from "../../components/Header/Header";
import Gender from "../../components/Gender/Gender";
import MoveList from "../../components/Move/MoveList";
import Recommendedlist from "../../components/Recommendedlist/Recommendedlist";
import Filter from "../../components/Filter/Filter";
import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";

const Homepage=(props)=> {
    let type = "";
    let genreName = "Смотрите фильмы в HD качестве";
   
  return (
    <div>
      <Helmet>
        <title> SharKino | {type} - {genreName} </title>
        <meta name="og:title" content="SharKino Смотрите фильмы в HD качестве" />
        <meta name="og:description" content="Присоединяйтесь к нам и зовите друзей, чтобы вместе с sharKino отправиться в волшебный и увлекательный мир Смотреть фильмы онлайн!" />
      </Helmet>
      <Header />
      <Slider/>
      <div className="hero common-hero hid">
        <div className="container filter">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <br/>
                <Filter history={props.history} params={props.params} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single">
        <div className="container">
          <Gender history={props.history} params={props.params} />
          <div className="row ipad-width">
            <MoveList history={props.history} params={props.params} />
            <Recommendedlist />
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar">
                <div id="yandex_rtb_R-A-7202047-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
