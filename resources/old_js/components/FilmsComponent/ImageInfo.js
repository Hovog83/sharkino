/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


function Preloader() {
    return ( "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAD6CAIAAAC+mksiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBFMTREOUZGM0M2NzExRUFBN0YxQ0U1MjI4NzFCMEI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBFMTREQTAwM0M2NzExRUFBN0YxQ0U1MjI4NzFCMEI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEUxNEQ5RkQzQzY3MTFFQUE3RjFDRTUyMjg3MUIwQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEUxNEQ5RkUzQzY3MTFFQUE3RjFDRTUyMjg3MUIwQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4s6sHLAAAPs0lEQVR42uyd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" );
  }

  
function ImageInfo(props) {
    return (
            <div className="movie-img">
            <a className="movie-item-style-2 movie-item-style-1" style={{ padding: "0", margin: "0", width: "100%"}}>
                
                { (() => {
                    var poster = props.move.poster.split("https://image.tmdb.org/t/p/w300");
                    if(props.move.poster.indexOf("https") == -1 || poster[1] == "" ){
                        return <img style={{ height: "350px" }} src="preloader.png" title={props.move.title_ru + " - " + props.move.title_orig} alt={props.move.title_ru + " - " + props.move.title_orig}  />;
                    }else{
                        return <img style={{ height: "350px" }} src={props.move.poster} title={props.move.title_ru + " - " + props.move.title_orig} alt={props.move.title_ru + " - " + props.move.title_orig}  />;
                    }
                    
                })()} 
             
                <div className="hvr-inner" style={{opacity:"1"}}>
                {(() => {
                        switch (props.move.type) {
                            case "movie": return <img className="type_image_value" title="movie" alt="movie" src="/assets/front/images/film.svg" />;
                            default: return <img className="type_image_value" title="serial" alt="serial" src="/assets/front/images/serial.svg" />;
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
