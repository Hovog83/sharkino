import React from "react";
import Header from "../../components/Header";
import FilmsComponent from "../../components/FilmsComponent";
import "./css.css";

function Films(props) {


  return (
    <div>
      <Header />
      <div className="page-single">
        <div className="container">
          <div
            className="row ipad-width"
            id="FilmsComponent"
            style={{ marginTop: "100px" }}
          >
            <FilmsComponent
              history={props.history}
              id={props.match.params.id}
            />
            {/* <Recommendedlist /> */}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Films;
