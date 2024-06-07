import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import MoveListActors from "../../components/MoveListActors/MoveListActors";
import { useParams, useLocation } from "react-router-dom";

const Actorspage = (props) => {
  const { id } = useParams()
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />
      <div className="hero common-hero ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
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
              params={id}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Actorspage;
