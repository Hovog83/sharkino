import React from "react";
import Header from "../../components/Header";
import MoveList from "../../components/Move";
import Recommendedlist from "../../components/Recommendedlist";
import Filter from "../../components/Filter";

function Category(props) {
  
  return (
    <div>
      <div id="preloader">
        <div id="status">
          <span></span>
          <span></span>
        </div>
      </div>
      <Header />
      <div className="hero common-hero hid">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <Filter history={props.history}  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width">
            <MoveList history={props.history} params={props.match.params} />
            <Recommendedlist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
