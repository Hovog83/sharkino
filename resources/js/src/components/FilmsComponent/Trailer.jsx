import React, { useState } from "react";
import ModalVideo from 'react-modal-video'
import "./vido.css"

const Trailer=(props)=> {
    
    let videos = false;
    let viHref = false;
    const [isOpen, isOpenF] = useState(false);
    if(props.move.videos_ru != ""){
     videos =  props.move.videos_ru
    }else if(props.move.videos_en != ""){
     videos =  props.move.videos_en
    }else{
        viHref =  "http://www.youtube.com/results?search_query="+ props.move.title_ru +" ("+ props.move.year +") - трейлер"
    }
  
    function openModal() {
        isOpenF(true)
    }
    function closeModal() {
        isOpenF(false)
    }
    return (
        <div className="movie-btn">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId={videos} onClose={closeModal} />
            <div className="btn-transform red" style={{ marginTop:"10px",width: "100%"}}>
                <div>
                {(() => {
                        switch (videos) {
                            case false: return <a href={viHref} className="item item-2 redbtn fancybox fancybox-media btnw" target="_blank"><i className="ion-play"></i>Tрейлер</a>;
                            default: return <a onClick={openModal} className="item item-2 redbtn fancybox fancybox-media btnw" > <i className="ion-play"></i>Tрейлер</a>;
                    }
                })()} 
                </div>
            </div>
            <div className="btn-transform transform-vertical">
            </div>
        </div>
    )
}

export default Trailer;
