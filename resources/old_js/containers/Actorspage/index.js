import React from "react";
import Header from "../../components/Header";
import MoveListActors from "../../components/MoveListActors";
import Filter from "../../components/Filter";

function Actorspage(props) {
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
                <Filter history={props.history} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width">
            <MoveListActors
              history={props.history}
              params={props.match.params}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actorspage;
