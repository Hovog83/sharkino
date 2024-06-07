import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import FilmsComponent from "../../components/FilmsComponent/FilmsComponents";
import { useParams, useLocation } from "react-router-dom";

const Films = (props) => {
  const id = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />
      <div className="page-single" >
        
        <div className="container">
          <div
            className="row ipad-width"
            id="FilmsComponent"
          >
            <FilmsComponent history={props.history} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Films;
