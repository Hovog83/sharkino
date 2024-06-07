import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getRecommendeds } from "../../redux/actions/recommendeds.js";
import ImageLoader from "../ImageLoader/ImageLoader.jsx";

const Preloader=(props)=> {
  return (
     <img src="/preloader.png"  />
  );
} 

const Recommendedlist=()=> {
  const dispatch = useDispatch();
  const { recommendeds } = useSelector(({ recommended }) => ({
    recommendeds: recommended
  }));

  useEffect(() => {
    dispatch(getRecommendeds());
  }, [dispatch]);

  return (
    <div className="col-md-4 col-sm-12 col-xs-12">
      <div className="sidebar">
        <div className="">
          <h4 className="sb-title">РЕКОМЕНДУЕМЫЕ</h4>
          <div id="recommended">
            {recommendeds.recommendeds.map((item, index) => {
                return (
                  <div key={item.id} className="" style={{ width: "46%", float: "left", margin: "3% 0", marginLeft: "4%" }}>
                    <Link to={"/films/" + item.id}>
                      <ImageLoader
                        src={item.poster}
                      >
                        <img />
                        <div><img src="/storage/placeholder.png"  /></div>
                        <Preloader />
                      </ImageLoader>
                      <div className="mv-item-infor" style={{ marginTop: "7px" }}>
                        <h6 className="title_move"> {item.title_ru}  - {item.title_en}</h6>
                      </div>
                    </Link>
                  </div>
                );
            })} 

          </div>
        </div>
      </div>
      <div className="sidebar">
    
      </div>
    </div>
  );
}

export default Recommendedlist;
