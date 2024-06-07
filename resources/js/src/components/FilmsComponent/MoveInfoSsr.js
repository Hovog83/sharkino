import React from "react";
import { a } from "react-router-dom";


const MoveInfoSsr=(props) =>{
    
    return (
        <div>
            <div className="t-row" >
                <div className="r-2 r-4 r-1">
                    <div className="rl-1">Название</div>
                    <div className="rl-2">
                        <h1 itemProp="name">{props.move.title_ru}</h1>
                    </div>
                </div>
                <div className="r-2 r-4">
                    <div className="rl-1">IMDB</div>
                    <div className="rl-2">
                        <div >
                            <i className="ion-android-star"></i>
                            <span>&nbsp;{props.move.imdbRating} </span>
                        </div>
                    </div>
                </div>
                <div className="r-2 r-4 r-1">
                    <div className="rl-1">Год</div>
                    <div className="rl-2" itemProp="dateCreated"><a href="#" rel="tag" className="">&nbsp;{props.move.year}</a></div>
                </div>
                <div className="r-2 r-4">
                    <div className="rl-1">Качество</div>
                    <div className="rl-2">
                        <div>&nbsp;{props.move.quality}</div>
                    </div>
                </div>
                <div className="r-2 r-4 r-1">
                    <div className="rl-1">Страна</div>
                    <div className="rl-2">&nbsp;
                        {props.move.get_country.map(item => {
                            return (item.get_country.country_ru+",")
                        })}
                    </div>
                </div>
                <div className="r-2 r-4">
                    <div className="rl-1">Жанр</div>
                    <div className="rl-2" itemProp="genre">&nbsp;
                        {props.move.get_genre.map(item => {
                            if (item.get_genre) {
                              return (
                                <a key={item.get_genre.id}
                                  href={
                                    "/category/movie/genre/" +
                                    item.get_genre.genre_name
                                  }
                                  rel="tag"
                                >
                                  {item.get_genre.genre_name_ru} ,
                                </a>
                              );
                            }
                        
                        })}
                    </div>
                </div>
                <div className="r-2 r-4 r-1" >
                    <div className="rl-1">Длительность</div>
                    <div className="rl-2">&nbsp;
                        {props.move.runtime}
                    </div>
                </div>
                <div className="r-2 r-4">
                    <div className="rl-1">Актеры</div>
                    <div className="rl-2">&nbsp;
                        {props.move.get_actors.map(item => {
                            // eslint-disable-next-line no-unused-expressions
                            return ( 
                                <a  key={item.get_actors.id}  href={"/actors/" + item.actors_id} rel="tag">
                                    {item.get_actors.actors_name} ,
                                </a> 
                            );
                        })}
                    </div>
                </div>
                <div className="r-2 r-4 r-1">
                    <div className="rl-1">Pежиссер</div>
                    <div className="rl-2">&nbsp;
                        {props.move.get_director.map(item => {
                            // eslint-disable-next-line no-unused-expressions
                            return (
                                <a key={item.get_director.id}  href={"/director/" + item.director_id} rel="tag">
                                    {item.get_director.director} ,
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="t-row sidebar" >
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
}

export default MoveInfoSsr;
