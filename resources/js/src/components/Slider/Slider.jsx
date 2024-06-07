import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const [moves, setMoves] = useState([]);
    const [autoMate, setAutoMate] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://sharkino.com/api/movies/latest');
                const movesData = response.data;
                setMoves(movesData);
            } catch (error) {
                console.error('Error fetching moves:', error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        if (autoMate) {
            const interval = setInterval(() => {
                setSlides(1);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [autoMate, index, moves.length]);

    useEffect(() => {
        displaySlides(index);
    }, [index]);

    function displaySlides(val) {
        const slides = document.getElementsByClassName("imageSlides");
        if (slides.length === 0) return;

        if (val >= slides.length) {
            setIndex(0);
            return;
        }
        if (val < 0) {
            setIndex(slides.length - 1);
            return;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[val].style.display = "block";
    }

    function setSlides(val) {
        setIndex((prevIndex) => {
            let newIndex = prevIndex + val;
            if (newIndex >= moves.length) {
                newIndex = 0;
            } else if (newIndex < 0) {
                newIndex = moves.length - 1;
            }
            return newIndex;
        });
    }

    return (
        <div className='slider_new'>
            <div id="preloader">
                <div id="status">
                    <span></span>
                    <span></span>
                </div>
            </div>
            {moves.map((move, idx) => (
                <Link to={`/films/${move.id}`} key={idx}>
                    <div id='slider_new' style={{ display: idx === index ? 'block' : 'none' }}>
                        <h4 id='primere'>Новый фильм</h4>
                        <img id='images_slider' src={move.backdrop_path} alt={`Slide ${idx + 1}`} />
                        <h3 id='film_title'>{move.title_ru}</h3>
                        <h4 id='slider-watch'> <img class="type_image_value" src="./images/serial.svg" alt="" /> Cмотреть фильм</h4>

                    </div>
                </Link>
            ))}
            <div className='slider-controls'>
                <div className="slider-btn previous" onClick={() => setSlides(-1)}>❮</div>
                <div className="slider-btn next" onClick={() => setSlides(1)}>❯</div>
            </div>
        </div>
    );
};

export default Slider;

