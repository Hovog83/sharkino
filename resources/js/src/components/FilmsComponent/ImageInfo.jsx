import React from "react";

const ImageInfo = (props) => {
    return (
        <div className="movie-img">
            <a className="movie-item-style-2 movie-item-style-1" style={{ padding: "0", margin: "0", width:'230px' }}>
                {(() => {
                    var poster = props.move.poster.split("https://image.tmdb.org/t/p/w500");
                    if (props.move.poster.indexOf("https") == -1 || poster[1] == "") {
                        return <img className='movie_image' style={{ height: "350px"}} src="/preloader.png" title={props.move.title_ru + " - " + props.move.title_orig} alt={props.move.title_ru + " - " + props.move.title_orig} />;
                    } else {
                        return <img className="movie_image" style={{ height: "350px"}} src={props.move.poster} title={props.move.title_ru + " - " + props.move.title_orig} alt={props.move.title_ru + " - " + props.move.title_orig} />;
                    }

                })()}
                <div className="hvr-inner" style={{ opacity: "1" }}>
                    {(() => {
                        switch (props.move.type) {
                            case "movie": return <img className="type_image_value" title="movie" alt="movie" src="/images/film.svg" />;
                            default: return <img className="type_image_value" title="serial" alt="serial" src="/images/serial.svg" />;
                        }
                    })()}
                    {(() => {
                        switch (props.move.type) {
                            case "movie": return <h2><span className="type_value" style={{ display: "none" }} >Фильм</span></h2>;
                            default: return <h2><span className="type_value" style={{ display: "none" }} >Cериал</span></h2>
                        }
                    })()}
                </div>
            </a>
        </div>
    )
}
export default ImageInfo;
