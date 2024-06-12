import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles.css";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoviesDropdownOpen, setIsMoviesDropdownOpen] = useState(false);
  const [isSeriesDropdownOpen, setIsSeriesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleMoviesDropdown = (e) => {
    e.preventDefault();
    setIsMoviesDropdownOpen((prevState) => !prevState);
  };

  const toggleSeriesDropdown = (e) => {
    e.preventDefault();
    setIsSeriesDropdownOpen((prevState) => !prevState);
  };

  const goToHome = (e) => {
    e.preventDefault();
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-default navbar-custom">
      <div className="navbar-header logo">
        <Link title="sharkion" to="/" onClick={goToHome}>
          <img
            className="logo"
            src="/logo1.png?v=1"
            title="Sharkion"
            alt="Sharkion"
            width="110"
          />
        </Link>
        <button
  type="button"
  className="navbar-toggle"
  onClick={toggleMenu}
  aria-expanded={isMenuOpen ? "true" : "false"}
  aria-controls="bs-example-navbar-collapse-1"
>
  <span className="icon-bar"></span>
  <span className="icon-bar"></span>
  <span className="icon-bar"></span>
</button>
      </div>
      <div
        className={`collapse navbar-collapse flex-parent ${isMenuOpen ? "show" : ""}`}
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav flex-child-menu menu-left">
          <li className={`dropdown first ${isMoviesDropdownOpen ? "oa" : ""}`}>
            <h1>
              <a
                href="#"
                className="btn btn-default dropdown-toggle lv1"
                onClick={toggleMoviesDropdown}
              >
                Фильмы <i className="fa fa-angle-down" aria-hidden="true"></i>
              </a>
            </h1>
            <ul className="dropdown-menu level1">
              <li>
                <Link to="/category/movie/genre/thriller">
                  Боевик
                </Link>
              </li>
          
              <li>
                <Link to="/category/movie/genre/cartoon">
                  Мультфильм
                </Link>
              </li>
              <li>
                <Link to="/category/movie/genre/comedy">
                  Комедия
                </Link>
              </li>
              <li>
                <Link to="/category/movie/genre/crime">
                  Криминал
                </Link>
              </li>
              <li>
                <Link to="/category/movie/genre/documentary">
                  Документальный
                </Link>
              </li>
              <li>
                <Link to="/category/movie/genre/drama">
                  Драма
                </Link>
              </li>
              <li>
                <Link to="/category/movie/genre/family">
                  Семейный
                </Link>
              </li>
              <li>
                <Link to="/category/movie/genre/fantasy">
                  Фэнтези
                </Link>
              </li>
              <li>
                <Link to="/category/movie/genre/story">
                  История
                </Link>
              </li>
              <li>
                <Link to="/category/movie/genre/horrors">
                  Ужасы
                </Link>
                <Link to="/category/movie/genre/music">
                  Музыка
                </Link>
              </li>
              <li>
                <Link to="/category/movie/genre/detective">
                  Детектив
                </Link>
              </li>
              <li>
                <Link to="/category/movie/genre/melodrama">
                  Мелодрама
                </Link>
              </li>
              <li>
                <Link to="/category/movie/genre/fantasy">
                  Фантастика
                </Link>
              </li>
              
              <li>
                <Link to="/category/movie/genre/thriller">
                  Триллер
                </Link>
              </li>
              <li>
                <Link to="/category/movie/genre/military">
                  Военный
                </Link>
              </li>
              <li>
              <Link to="/category/movie/genre/western">
                  Вестерн
                </Link>
              </li>
              <li>
              <Link to="/category/movie/genre/television">
                  Телевизионный
                </Link>
              </li>
            </ul>
          </li>
          <li className={`dropdown first ${isSeriesDropdownOpen ? "a" : ""}`}>
            <h1>
              <a
                href="#"
                className="btn btn-default dropdown-toggle lv1"
                onClick={toggleSeriesDropdown}
              >
                Cериалы <i className="fa fa-angle-down" aria-hidden="true"></i>
              </a>
            </h1>
            <ul className="dropdown-menu level1">
              <li>
                <Link to="/category/series/genre/action-adventure">
                  Боевик
                </Link>
              </li>
              <li>
                <Link to="/category/series/genre/cartoon">
                  мультфильм
                </Link>
              </li>
              <li>
                <Link to="/category/series/genre/comedy">
                  комедия
                </Link>
              </li>
              <li>
                <Link to="/category/series/genre/crime">
                  криминал
                </Link>
              </li>
             
              <li>
                <Link to="/category/series/genre/drama">
                  драма
                </Link>
              </li>
              <li>
                <Link to="/category/series/genre/family">
                  семейный
                </Link>
              </li>
              <li>
                <Link to="/category/series/genre/child">
                  Детский
                </Link>
              </li>
              <li>
                <Link to="/category/series/genre/detective">
                  детектив
                </Link>
              </li>
              <li>
                <Link to="/category/series/genre/news">
                  Новости
                </Link>
              </li>
              <li>
              <Link to="/category/series/genre/war-and-politics">
                  Война 
                </Link>
                
              </li>
              <li>
                <Link to="/category/series/genre/sf-and-fantasy">
                  Фэнтези
                </Link>
              </li>
              <li>
                <Link to="/category/series/genre/soap-opera">
                  Мыльная опера
                </Link>
              </li>
              <li>
              <Link to="/category/series/genre/western">
                  вестерн
                </Link>
              </li>
              <li>
                <Link to="/category/series/genre/talk-show">
                  Ток-шоу
                </Link>
              </li>
              <li>
              <Link to="/category/series/genre/reality-show">
                  Реалити-шоу
                </Link>
              </li>
              <li>
              <Link to="/category/series/genre/documentary">
                  документальный
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="nav navbar-nav flex-child-menu menu-right">
          <li className="btn signupLink">
            <a target="_blank" href="#">
              LIVE TV (coming soon)
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
