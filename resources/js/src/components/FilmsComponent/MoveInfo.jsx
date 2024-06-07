import React from "react";
import { Link } from "react-router-dom";

const MoveInfo=(props)=> {
    return (
        <div>
            <div className="t-row" >
            <div className="r-2 r-4  ">
                    <div className="rl-1">Название</div>
                    <div className="rl-2">
                        <h1 itemProp="name">{props.move.title_ru}</h1>
                    </div>
                </div>
                <div className="r-2 r-4 r-1">
                    <div className="rl-1">IMDB</div>
                    <div className="rl-2">
                        <div >
                            <i className="ion-android-star"></i>
                            <span>&nbsp;{props.move.imdbRating} </span>
                        </div>
                    </div>
                </div>
                <div className="r-2 r-4 ">
                    <div className="rl-1">Год</div>
                    <div className="rl-2" itemProp="dateCreated"><a href="#" rel="tag" className="">&nbsp;{props.move.year}</a></div>
                </div>
                {/* <div className="r-2 r-4">
                    <div className="rl-1">Качество</div>
                    <div className="rl-2">
                        <div>&nbsp;{props.move.quality}</div>
                    </div>
                </div> */}
                <div className="r-2 r-4 r-1 ">
                    <div className="rl-1">Страна</div>
                    <div className="rl-2">&nbsp;
                    {props.move.get_country.map(item => {
                            if (item.get_country) {
                                return (item.get_country.country_ru+",")
                            }
                        })}
                    </div>
                </div>
                <div className="r-2 r-4 ">
                    <div className="rl-1">Жанр</div>
                    <div className="rl-2" itemProp="genre">&nbsp;
                        {props.move.get_genre.map(item => {
                            if (item.get_genre && props.move.type == "movie") {
                              return (
                                <Link  title={item.get_genre.genre_name} key={item.get_genre.id}
                                  to={
                                    "/category/movie/genre/" +
                                    item.get_genre.genre_name_hy
                                  }
                                  rel="tag"
                                >
                                  {item.get_genre.genre_name_ru}, 
                                </Link>
                              );
                            }else if(item.get_genre && props.move.type == "series"){
                                return (
                                    <Link title={item.get_genre.genre_name} key={item.get_genre.id}
                                      to={
                                        "/category/series/genre/" +
                                        item.get_genre.genre_name_hy
                                      }
                                      rel="tag"
                                    >
                                      {item.get_genre.genre_name_ru} ,
                                    </Link>
                                  ); }
                        })}
                    </div>
                </div>
                {/* <div className="r-2 r-4 r-1 " >
                    <div className="rl-1">Длительность</div>
                    <div className="rl-2">&nbsp;
                        {props.move.runtime}
                    </div>
                </div> */}
                <div className="r-2 r-4  r-1">
                    <div className="rl-1">Актеры</div>
                    <div className="rl-2">&nbsp;
                        {props.move.get_actors.map(item => {
                            return ( 
                                <Link  key={item.get_actors.id}  to={"/actors/" + item.actors_id} rel="tag">
                                    {item.get_actors.actors_name} ,
                                </Link> 
                            );
                        })}
                    </div>
                </div>
                <div className="r-2 r-4 ">
                </div>
            </div>
            <div className="  r-1" >
                <h6 className="sb-title">ОПИСАНИЕ</h6>
                {(() => {
                    if (props.move.plot_ru != ""){
                        return <p itemProp="description">&nbsp;{props.move.plot_ru} </p>
                    }else{
                        return <p itemProp="description">&nbsp;{props.move.plot} </p>
                    }
                })()}      
            </div>
        </div>
    )
};

export default MoveInfo;
