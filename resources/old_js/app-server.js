import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { Helmet } from "react-helmet";
import ImageInfo  from "./components/FilmsComponent/ImageInfo.js";
import Moveinfo from "./components/FilmsComponent/MoveInfoSsr.js";

function Move(prop) {
  
	if(url  == "file"){
		return (
			<div>
				<header className="ht-header">
					<div className="container">
					<nav className="navbar navbar-default navbar-custom">
						<div className="navbar-header logo">
							<div
							className="navbar-toggle"
							data-toggle="collapse"
							data-target="#bs-example-navbar-collapse-1"
							>
							<span className="sr-only">Toggle navigation</span>
							<div id="nav-icon1">
								<span></span>
								<span></span>
								<span></span>
							</div>
							</div>
							<a href="/?">
							<img
								className="logo"
								src="/assets/front/images/logo1.png?v=1"
								alt=""
								width="125"
							/>
							</a>
						</div>
						<div
							className="collapse navbar-collapse flex-parent"
							id="bs-example-navbar-collapse-1"
						>
							
							<ul className="nav navbar-nav flex-child-menu menu-left">
							<li className="hidden">
								<a href="#page-top"></a>
							</li>
							<li className="dropdown first acrive">
								<a className="btn btn-default dropdown-toggle lv1" >
								Фильмы <i className="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<ul className="dropdown-menu level1" >
								<li>
									<a href="/category/movie/genre/Comedy">Комедия</a>
								</li>
								<li>
									<a href="/category/movie/genre/Action">Боевик</a>
								</li>
								<li>
									<a href="/category/movie/genre/Thriller">Триллер</a>
								</li>
								<li>
									<a href="/category/movie/genre/Biography">Биография</a>
								</li>
								<li>
									<a href="/category/movie/genre/History">История</a>
								</li>
								<li>
									<a href="/category/movie/genre/Drama">Драма</a>
								</li>
								<li>
									<a href="/category/movie/genre/Documentary">Документальный</a>
								</li>
								<li>
									<a href="/category/movie/genre/Adventure">Приключение</a>
								</li>
								<li>
									<a href="/category/movie/genre/Family">Семейный</a>
								</li>
								<li>
									<a href="/category/movie/genre/Mystery">Детектив</a>
								</li>
								<li>
									<a href="/category/movie/genre/Fantasy">Фантастика</a>
								</li>
								<li>
									<a href="/category/movie/genre/Crime">Криминал</a>
								</li>
								<li>
									<a href="/category/movie/genre/Horror">Ужасы</a>
								</li>
								<li>
									<a href="/category/movie/genre/Sci-Fi">Фэнтези</a>
								</li>
								<li>
									<a href="/category/movie/genre/Romance">Мелодрама</a>
								</li>
								<li>
									<a href="/category/movie/genre/War">Военный</a>
								</li>
								<li>
									<a href="/category/movie/genre/Short">Короткий</a>
								</li>
								<li>
									<a href="/category/movie/genre/Sport">Спорт</a>
								</li>
								<li>
									<a href="/category/movie/genre/Music">Музыка</a>
								</li>
								<li>
									<a href="/category/movie/genre/Musical">Мюзикл</a>
								</li>
								<li>
									<a href="/category/movie/genre/Western">Вестерн</a>
								</li>
								<li>
									<a href="/category/movie/genre/RealityTV">Реалити-шоу</a>
								</li>
								<li>
									<a href="/category/movie/genre/News">News</a>
								</li>
								<li>
									<a href="/category/movie/genre/Adult">взрослых</a>
								</li>
								<li>
									<a href="/category/movie/genre/FilmNoir">Фильм-нуар</a>
								</li>
								<li>
									<a href="/category/movie/genre/Animation">Animation</a>
								</li>
								</ul>
							</li>
							<li className="dropdown first">
								<a
								className="btn btn-default dropdown-toggle lv1"
								data-toggle="dropdown"
								>
								Cериалы<i className="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<ul className="dropdown-menu level1" >
								<li>
									<a href="/category/series/genre/Family"> Семейный </a>
								</li>
								<li>
									<a href="/category/series/genre/Drama"> Драма </a>
								</li>
								<li>
									<a href="/category/series/genre/Horror"> Ужасы </a>
								</li>
								<li>
									<a href="/category/series/genre/Mystery"> Детектив </a>
								</li>
								<li>
									<a href="/category/series/genre/History"> История </a>
								</li>
								<li>
									<a href="/category/series/genre/Romance"> Мелодрама </a>
								</li>
								<li>
									<a href="/category/series/genre/Adventure"> Приключение </a>
								</li>
								<li>
									<a href="/category/series/genre/Fantasy"> Фантастика </a>
								</li>
								<li>
									<a href="/category/series/genre/Comedy"> Комедия </a>
								</li>
								<li>
									<a href="/category/series/genre/Short"> Короткий </a>
								</li>
								<li>
									<a href="/category/series/genre/Action"> Боевик </a>
								</li>
								<li>
									<a href="/category/series/genre/Sci-Fi">  Фэнтези </a>
								</li>
								<li>
									<a href="/category/series/genre/Thriller"> Триллер </a>
								</li>
								<li>
									<a href="/category/series/genre/Documentary"> Документальный </a>
								</li>
								<li>
									<a href="/category/series/genre/Crime"> Криминал </a>
								</li>
								<li>
									<a href="/category/series/genre/War"> Военный </a>
								</li>
								<li>
									<a href="/category/series/genre/Western"> Вестерн </a>
								</li>
								<li>
									<a href="/category/series/genre/Biography"> Биография </a>
								</li>
								<li>
									<a href="/category/series/genre/Music"> Музыка </a>
								</li>
								<li>
									<a href="/category/series/genre/Musical"> Мюзикл </a>
								</li>
								<li>
									<a href="/category/series/genre/Sport"> Спорт </a>
								</li>
								<li>
									<a href="/category/series/genre/News"> News </a>
								</li>
								<li>
									<a href="/category/series/genre/Talk-Show"> Ток_шоу </a>
								</li>
								<li>
									<a href="/category/series/genre/Reality-TV"> Реалити_шоу </a>
								</li>
								<li>
									<a href="/category/series/genre/Game-Show"> Игровое шоу </a>
								</li>
								<li>
									<a href="/category/series/genre/Animation"> Animation </a>
								</li>
								</ul>
							</li>
							<li className="dropdown first">
								<a
								className="btn btn-default dropdown-toggle lv1"
								data-toggle="dropdown"
								>
								ТВ ШОУ<i className="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<ul className="dropdown-menu level1" >
								<li>
									<a href="/category/show_tv/genre/History">  История </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Documentary">  Документальный </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Reality-TV"> Реалити-шоу </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Comedy">  Комедия </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Adventure">  Приключение </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Drama">  Драма </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Family">  Семейный </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Crime">  Криминал </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Talk-Show"> Ток-шоу </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Game-Show"> Игровое шоу </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Animation">  Анимация </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Action">  Боевик </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Fantasy">  Фантастика </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Romance">  Мелодрама </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Sci-Fi"> Фэнтези </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Thriller">  Триллер </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Sport">  Спорт </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Mystery">  Детектив </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Music">  Музыка </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/News">  News </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Horror">  Ужасы </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/War">  Военный </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Biography">  Биография </a>
								</li>
								</ul>
							</li>
							<li className="dropdown first">
								<a
								className="btn btn-default dropdown-toggle lv1"
								data-toggle="dropdown"
								>
								Aниме<i className="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<ul className="dropdown-menu level1" >
								<li>
									<a href="/category/animes/genre/Animation"> Анимация </a>
								</li>
								<li>
									<a href="/category/animes/genre/Action"> Боевик </a>
								</li>
								<li>
									<a href="/category/animes/genre/Comedy"> Комедия </a>
								</li>
								<li>
									<a href="/category/animes/genre/Sci-Fi"> Фэнтези </a>
								</li>
								<li>
									<a href="/category/animes/genre/Thriller"> Триллер </a>
								</li>
								<li>
									<a href="/category/animes/genre/Horror"> Ужасы </a>
								</li>
								<li>
									<a href="/category/animes/genre/Mystery"> Детектив </a>
								</li>
								<li>
									<a href="/category/animes/genre/Fantasy"> Фантастика </a>
								</li>
								<li>
									<a href="/category/animes/genre/Adventure"> Приключение </a>
								</li>
								<li>
									<a href="/category/animes/genre/Romance"> Мелодрама </a>
								</li>
								<li>
									<a href="/category/animes/genre/Drama"> Драма </a>
								</li>
								<li>
									<a href="/category/animes/genre/Family"> Семейный </a>
								</li>
								<li>
									<a href="/category/animes/genre/Crime"> Криминал </a>
								</li>
								<li>
									<a href="/category/animes/genre/Western"> Вестерн </a>
								</li>
								<li>
									<a href="/category/animes/genre/Music"> Музыка </a>
								</li>
								<li>
									<a href="/category/animes/genre/Short"> Короткий </a>
								</li>
								<li>
									<a href="/category/animes/genre/History"> История </a>
								</li>
								<li>
									<a href="/category/animes/genre/War"> Военный </a>
								</li>
								<li>
									<a href="/category/animes/genre/Biography"> Биография </a>
								</li>
								<li>
									<a href="/category/animes/genre/Sport"> Спорт </a>
								</li>
								</ul>
							</li>
							<li className="dropdown first">
								<a
								className="btn btn-default dropdown-toggle lv1"
								data-toggle="dropdown"
								>
								Aниме cериалы<i className="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<ul className="dropdown-menu level1" >
								<li>
									<a href="/category/anime_series/genre/Animation">  Анимация </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Action"> Боевик </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Adventure">  Приключение </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Fantasy"> Фантастика </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Romance"> Мелодрама </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Family"> Семейный </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Sci-Fi"> Фэнтези </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Crime"> Криминал </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Drama"> Драма </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Sport"> Спорт </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Comedy"> Комедия </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Horror"> Ужасы </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Music"> Музыка </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Mystery"> Детектив </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Thriller"> Триллер </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Musical"> Мюзикл </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Short"> Короткий </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/History"> История </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Western"> Вестерн </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/War"> Военный </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Adult"> Для взрослых </a>
								</li>
								</ul>
							</li>
							</ul>
								</div>
						</nav>
					</div>
				</header>
				<div className="page-single">
					<div className="container">
						<div
							className="row ipad-width"
							id="FilmsComponent"
							style={{ marginTop: "100px" }}
						>
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="col-md-3 col-sm-12 col-xs-12">
								<ImageInfo move={prop.movies} />
							</div>
							<div className="col-md-6">
								<div className="">
								<p className="rate"></p>
								</div>
								<Moveinfo move={prop.movies} />
							</div>
							<div className="col-md-3">
								<div className="ads">
								<img src="/assets/front/images/uploads/film1.png" alt="" />
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		)
	}else{
		return (
			<div>
				<header className="ht-header">
					<div className="container">
						<nav className="navbar navbar-default navbar-custom">
						<div className="navbar-header logo">
							<div
							className="navbar-toggle"
							data-toggle="collapse"
							data-target="#bs-example-navbar-collapse-1"
							>
							<span className="sr-only">Toggle navigation</span>
							<div id="nav-icon1">
								<span></span>
								<span></span>
								<span></span>
							</div>
							</div>
							<a href="/?">
							<img
								className="logo"
								src="/assets/front/images/logo1.png?v=1"
								alt=""
								width="125"
							/>
							</a>
						</div>
						<div
							className="collapse navbar-collapse flex-parent"
							id="bs-example-navbar-collapse-1"
						>
							
							<ul className="nav navbar-nav flex-child-menu menu-left">
							<li className="hidden">
								<a href="#page-top"></a>
							</li>
							<li className="dropdown first acrive">
								<a className="btn btn-default dropdown-toggle lv1" >
								Фильмы <i className="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<ul className="dropdown-menu level1" >
								<li>
									<a href="/category/movie/genre/Comedy">Комедия</a>
								</li>
								<li>
									<a href="/category/movie/genre/Action">Боевик</a>
								</li>
								<li>
									<a href="/category/movie/genre/Thriller">Триллер</a>
								</li>
								<li>
									<a href="/category/movie/genre/Biography">Биография</a>
								</li>
								<li>
									<a href="/category/movie/genre/History">История</a>
								</li>
								<li>
									<a href="/category/movie/genre/Drama">Драма</a>
								</li>
								<li>
									<a href="/category/movie/genre/Documentary">Документальный</a>
								</li>
								<li>
									<a href="/category/movie/genre/Adventure">Приключение</a>
								</li>
								<li>
									<a href="/category/movie/genre/Family">Семейный</a>
								</li>
								<li>
									<a href="/category/movie/genre/Mystery">Детектив</a>
								</li>
								<li>
									<a href="/category/movie/genre/Fantasy">Фантастика</a>
								</li>
								<li>
									<a href="/category/movie/genre/Crime">Криминал</a>
								</li>
								<li>
									<a href="/category/movie/genre/Horror">Ужасы</a>
								</li>
								<li>
									<a href="/category/movie/genre/Sci-Fi">Фэнтези</a>
								</li>
								<li>
									<a href="/category/movie/genre/Romance">Мелодрама</a>
								</li>
								<li>
									<a href="/category/movie/genre/War">Военный</a>
								</li>
								<li>
									<a href="/category/movie/genre/Short">Короткий</a>
								</li>
								<li>
									<a href="/category/movie/genre/Sport">Спорт</a>
								</li>
								<li>
									<a href="/category/movie/genre/Music">Музыка</a>
								</li>
								<li>
									<a href="/category/movie/genre/Musical">Мюзикл</a>
								</li>
								<li>
									<a href="/category/movie/genre/Western">Вестерн</a>
								</li>
								<li>
									<a href="/category/movie/genre/RealityTV">Реалити-шоу</a>
								</li>
								<li>
									<a href="/category/movie/genre/News">News</a>
								</li>
								<li>
									<a href="/category/movie/genre/Adult">взрослых</a>
								</li>
								<li>
									<a href="/category/movie/genre/FilmNoir">Фильм-нуар</a>
								</li>
								<li>
									<a href="/category/movie/genre/Animation">Animation</a>
								</li>
								</ul>
							</li>
							<li className="dropdown first">
								<a
								className="btn btn-default dropdown-toggle lv1"
								data-toggle="dropdown"
								>
								Cериалы<i className="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<ul className="dropdown-menu level1" >
								<li>
									<a href="/category/series/genre/Family"> Семейный </a>
								</li>
								<li>
									<a href="/category/series/genre/Drama"> Драма </a>
								</li>
								<li>
									<a href="/category/series/genre/Horror"> Ужасы </a>
								</li>
								<li>
									<a href="/category/series/genre/Mystery"> Детектив </a>
								</li>
								<li>
									<a href="/category/series/genre/History"> История </a>
								</li>
								<li>
									<a href="/category/series/genre/Romance"> Мелодрама </a>
								</li>
								<li>
									<a href="/category/series/genre/Adventure"> Приключение </a>
								</li>
								<li>
									<a href="/category/series/genre/Fantasy"> Фантастика </a>
								</li>
								<li>
									<a href="/category/series/genre/Comedy"> Комедия </a>
								</li>
								<li>
									<a href="/category/series/genre/Short"> Короткий </a>
								</li>
								<li>
									<a href="/category/series/genre/Action"> Боевик </a>
								</li>
								<li>
									<a href="/category/series/genre/Sci-Fi">  Фэнтези </a>
								</li>
								<li>
									<a href="/category/series/genre/Thriller"> Триллер </a>
								</li>
								<li>
									<a href="/category/series/genre/Documentary"> Документальный </a>
								</li>
								<li>
									<a href="/category/series/genre/Crime"> Криминал </a>
								</li>
								<li>
									<a href="/category/series/genre/War"> Военный </a>
								</li>
								<li>
									<a href="/category/series/genre/Western"> Вестерн </a>
								</li>
								<li>
									<a href="/category/series/genre/Biography"> Биография </a>
								</li>
								<li>
									<a href="/category/series/genre/Music"> Музыка </a>
								</li>
								<li>
									<a href="/category/series/genre/Musical"> Мюзикл </a>
								</li>
								<li>
									<a href="/category/series/genre/Sport"> Спорт </a>
								</li>
								<li>
									<a href="/category/series/genre/News"> News </a>
								</li>
								<li>
									<a href="/category/series/genre/Talk-Show"> Ток_шоу </a>
								</li>
								<li>
									<a href="/category/series/genre/Reality-TV"> Реалити_шоу </a>
								</li>
								<li>
									<a href="/category/series/genre/Game-Show"> Игровое шоу </a>
								</li>
								<li>
									<a href="/category/series/genre/Animation"> Animation </a>
								</li>
								</ul>
							</li>
							<li className="dropdown first">
								<a
								className="btn btn-default dropdown-toggle lv1"
								data-toggle="dropdown"
								>
								ТВ ШОУ<i className="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<ul className="dropdown-menu level1" >
								<li>
									<a href="/category/show_tv/genre/History">  История </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Documentary">  Документальный </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Reality-TV"> Реалити-шоу </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Comedy">  Комедия </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Adventure">  Приключение </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Drama">  Драма </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Family">  Семейный </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Crime">  Криминал </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Talk-Show"> Ток-шоу </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Game-Show"> Игровое шоу </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Animation">  Анимация </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Action">  Боевик </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Fantasy">  Фантастика </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Romance">  Мелодрама </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Sci-Fi"> Фэнтези </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Thriller">  Триллер </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Sport">  Спорт </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Mystery">  Детектив </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Music">  Музыка </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/News">  News </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Horror">  Ужасы </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/War">  Военный </a>
								</li>
								<li>
									<a href="/category/show_tv/genre/Biography">  Биография </a>
								</li>
								</ul>
							</li>
							<li className="dropdown first">
								<a
								className="btn btn-default dropdown-toggle lv1"
								data-toggle="dropdown"
								>
								Aниме<i className="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<ul className="dropdown-menu level1" >
								<li>
									<a href="/category/animes/genre/Animation"> Анимация </a>
								</li>
								<li>
									<a href="/category/animes/genre/Action"> Боевик </a>
								</li>
								<li>
									<a href="/category/animes/genre/Comedy"> Комедия </a>
								</li>
								<li>
									<a href="/category/animes/genre/Sci-Fi"> Фэнтези </a>
								</li>
								<li>
									<a href="/category/animes/genre/Thriller"> Триллер </a>
								</li>
								<li>
									<a href="/category/animes/genre/Horror"> Ужасы </a>
								</li>
								<li>
									<a href="/category/animes/genre/Mystery"> Детектив </a>
								</li>
								<li>
									<a href="/category/animes/genre/Fantasy"> Фантастика </a>
								</li>
								<li>
									<a href="/category/animes/genre/Adventure"> Приключение </a>
								</li>
								<li>
									<a href="/category/animes/genre/Romance"> Мелодрама </a>
								</li>
								<li>
									<a href="/category/animes/genre/Drama"> Драма </a>
								</li>
								<li>
									<a href="/category/animes/genre/Family"> Семейный </a>
								</li>
								<li>
									<a href="/category/animes/genre/Crime"> Криминал </a>
								</li>
								<li>
									<a href="/category/animes/genre/Western"> Вестерн </a>
								</li>
								<li>
									<a href="/category/animes/genre/Music"> Музыка </a>
								</li>
								<li>
									<a href="/category/animes/genre/Short"> Короткий </a>
								</li>
								<li>
									<a href="/category/animes/genre/History"> История </a>
								</li>
								<li>
									<a href="/category/animes/genre/War"> Военный </a>
								</li>
								<li>
									<a href="/category/animes/genre/Biography"> Биография </a>
								</li>
								<li>
									<a href="/category/animes/genre/Sport"> Спорт </a>
								</li>
								</ul>
							</li>
							<li className="dropdown first">
								<a
								className="btn btn-default dropdown-toggle lv1"
								data-toggle="dropdown"
								>
								Aниме cериалы<i className="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<ul className="dropdown-menu level1" >
								<li>
									<a href="/category/anime_series/genre/Animation">  Анимация </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Action"> Боевик </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Adventure">  Приключение </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Fantasy"> Фантастика </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Romance"> Мелодрама </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Family"> Семейный </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Sci-Fi"> Фэнтези </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Crime"> Криминал </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Drama"> Драма </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Sport"> Спорт </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Comedy"> Комедия </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Horror"> Ужасы </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Music"> Музыка </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Mystery"> Детектив </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Thriller"> Триллер </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Musical"> Мюзикл </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Short"> Короткий </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/History"> История </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Western"> Вестерн </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/War"> Военный </a>
								</li>
								<li>
									<a href="/category/anime_series/genre/Adult"> Для взрослых </a>
								</li>
								</ul>
							</li>
							</ul>
						</div>
						</nav>
					</div>
				</header>
				<div className="hero common-hero hid">
					<div className="container">
					<div className="row">
						<div className="col-md-12">
						<div className="hero-ct">

						</div>
						</div>
					</div>
					</div>
				</div>
				<div className="page-single">
					<div className="container">
						<div className="row ipad-width">
							<div className="col-md-8 col-sm-12 col-xs-12">
								<div className="flex-wrap-movielist">
									{prop.movies.data.map(item => {
										return (
										<div className="movie-item-style-2 movie-item-style-1" key={item.id}>
											<a href={"/films/" + item.id}>
										
											<img 
												src= { (() => {
															// switch (item.poster.indexOf("https")) {
															//     case -1: return "/storage/" + item.poster;
															//     default: return item.poster;
															// }
														if(item.poster.indexOf("https") == -1){
															if((item.poster == "N/A" || item.poster == "") && item.kinopoisk_id != ""){
																return "https://st.kp.yandex.net/images/film_iphone/iphone360_"+item.kinopoisk_id+".jpg";
															}else{
																return "/storage/" + item.poster;
															}
														}else{
															return item.poster;
														}
													})()} 
											/  >
											
											<div className="hvr-inner pla type_value">
												<img
												className=""
												alt="movie"
												src="/assets/favicon_io/play.png"
												/>
											</div>
											<div className="hvr-inner" style={{ top: "inherit",bottom:" 80px"}}>
												<div className="type_value">{item.quality}</div>
											</div>
											<div className="hvr-inner" style={{ opacity: "1" }}>
												{(() => {
												switch (item.type) {
													case "movie": return <img className="type_image_value" alt="movie" src="/assets/front/images/film.svg" />
													default: return <img className="type_image_value" alt="serial" src="/assets/front/images/serial.svg" />;
												}
												})()}
												{(() => {
												switch (item.type) {
													case "movie": return <span className="type_value" style={{ display: "none" }} >Фильм</span>;
													default: return <span className="type_value" style={{ display: "none" }} >Cериал</span>
												}
												})()}
											</div>
											</a>
											<div className="mv-item-infor">
											<h6 className="title_move">
												<a href={"/films/" + item.id}>{item.title_ru}</a>
											</h6>
											<p className="rate">
												<i className="ion-android-star"></i>
												<span>
												{item.imdbRating}
												</span>&nbsp;IMDB&nbsp;
												
												<span className="year_move">{item.year}</span>
											</p>
											</div>
										</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
let { movies ,url} = context;

const html = ReactDOMServer.renderToString(
	<Move  movies={movies} />
)
dispatch(html);