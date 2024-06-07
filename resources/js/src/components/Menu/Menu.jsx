import React from "react";
import {  Link} from "react-router-dom";
import '../../styles.css';

const Menu=()=> {
  const back=()=>{
    window.location.reload(); 
  }
  return (
      <nav className="navbar navbar-default navbar-custom">
        <div className="navbar-header logo"  onClick={back}> 
          <Link title="sharkion" to='/' >
            <img
              className="logo"
              src="/logo1.png?v=1"
              title="Sharkion"
              alt="Sharkion"
              width="110"
            />
          </Link>
          </div>
      <div
        className="collapse navbar-collapse flex-parent"
        id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav flex-child-menu menu-left">
          <li className="dropdown first acrive">
          <h1><Link  to="/?search=true&t=movie" className="btn btn-default dropdown-toggle lv1" >
             Фильмы <i className="fa fa-angle-down" aria-hidden="true"></i>
            </Link></h1>
            <ul className="dropdown-menu level1" >
              <li><Link title="боевик" to="/category/movie/genre/thriller">Боевик</Link></li>
              <li><Link title="приключения" to="/category/movie/genre/adventures">Приключения</Link></li>
              <li><Link title="мультфильм" to="/category/movie/genre/cartoon">Мультфильм</Link></li>
              <li><Link title="комедия" to="/category/movie/genre/comedy">Комедия</Link></li>
              <li><Link title="криминал" to="/category/movie/genre/crime">Криминал</Link></li>
              <li><Link title="документальный" to="/category/movie/genre/documentary">Документальный</Link></li>
              <li><Link title="драма" to="/category/movie/genre/drama">Драма</Link></li>
              <li><Link title="семейный" to="/category/movie/genre/family">Семейный</Link></li>
              <li><Link title="фэнтези" to="/category/movie/genre/fantasy">Фэнтези</Link></li>
              <li><Link title="история" to="/category/movie/genre/story">История</Link></li>
              <li><Link title="ужасы" to="/category/movie/genre/horrors">Ужасы</Link></li>
              <li><Link title="музыка" to="/category/movie/genre/music">Музыка</Link></li>
              <li><Link title="детектив" to="/category/movie/genre/detective">Детектив</Link></li>
              <li><Link title="мелодрама" to="/category/movie/genre/melodrama">Мелодрама</Link></li>
              <li><Link title="фантастика" to="/category/movie/genre/fantasy">Фантастика</Link></li>
              <li><Link title="телевизионный" to="/category/movie/genre/television">Телевизионный</Link></li>
              <li><Link title="триллер" to="/category/movie/genre/thriller">Триллер</Link></li>
              <li><Link title="военный" to="/category/movie/genre/military">Военный</Link></li>
              <li><Link title="вестерн" to="/category/movie/genre/western">Вестерн</Link></li>
            </ul>
          </li>
          
          <li className="dropdown first acrive">
          <h1> <Link  to="/?search=true&t=series" 
              className="btn btn-default dropdown-toggle lv1"
              data-toggle="dropdown" > Cериалы<i className="fa fa-angle-down" aria-hidden="true"></i>
            </Link></h1>
            <ul className="dropdown-menu level1">
              <li><Link title="Боевик и Приключения" to="/category/series/genre/action-adventure">Боевик и Приключения</Link></li>
              <li><Link title="мультфильм" to="/category/series/genre/cartoon">мультфильм</Link></li>
              <li><Link title="комедия" to="/category/series/genre/comedy">комедия</Link></li>
              <li><Link title="криминал" to="/category/series/genre/crime">криминал</Link></li>
              <li><Link title="документальный" to="/category/series/genre/documentary">документальный</Link></li>
              <li><Link title="драма" to="/category/series/genre/drama">драма</Link></li>
              <li><Link title="семейный" to="/category/series/genre/family">семейный</Link></li>
              <li><Link title="Детский" to="/category/series/genre/child">Детский</Link></li>
              <li><Link title="детектив" to="/category/series/genre/detective">детектив</Link></li>
              <li><Link title="Новости" to="/category/series/genre/news">Новости</Link></li>
              <li><Link title="Реалити-шоу" to="/category/series/genre/reality-show">Реалити-шоу</Link></li>
              <li><Link title="НФ и Фэнтези" to="/category/series/genre/sf-and-fantasy">НФ и Фэнтези</Link></li>
              <li><Link title="Мыльная опера" to="/category/series/genre/soap-opera">Мыльная опера</Link></li>
              <li><Link title="Ток-шоу" to="/category/series/genre/talk-show">Ток-шоу</Link></li>
              <li><Link title="Война и Политика" to="/category/series/genre/war-and-politics">Война и Политика</Link></li>
              <li><Link title="вестерн" to="/category/series/genre/western">вестерн</Link></li>
            </ul>
          </li>
        </ul>
        <ul className="nav navbar-nav flex-child-menu menu-right">
						<li className="btn signupLink"><a target="_blank" href="#" >LIVE TV (coming soon)</a></li>
					</ul>
      </div>
    </nav>
  );
}

export default Menu;





















// import React from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import '../../styles.css';

// const Menu=()=> {
//   return (
//       <nav className="navbar navbar-default navbar-custom">
//         <div className="navbar-header logo">
//           <Link title="sharkion" to="/">
//             <img
//               className="logo"
//               src="/logo1.png?v=1"
//               title="Sharkion"
//               alt="Sharkion"
//               width="125"
//             />
//           </Link>
//         </div>
//         <div
//           className="collapse navbar-collapse flex-parent"
//           id="bs-example-navbar-collapse-1"
//         >
//           <ul className="nav navbar-nav flex-child-menu menu-left">
//             <li className="dropdown first acrive">
//               <h1>
//                 <Link to="/?search=true&t=movie" className="btn btn-default dropdown-toggle lv1">
//                   Фильмы <i className="fa fa-angle-down" aria-hidden="true"></i>
//                 </Link>
//               </h1>
//               <ul className="dropdown-menu level1">
//               <li><Link title="боевик" to="/category/movie/genre/thriller">Боевик</Link></li>
//               <li><Link title="приключения" to="/category/movie/genre/adventures">Приключения</Link></li>
//               <li><Link title="мультфильм" to="/category/movie/genre/cartoon">Мультфильм</Link></li>
//               <li><Link title="комедия" to="/category/movie/genre/comedy">Комедия</Link></li>
//               <li><Link title="криминал" to="/category/movie/genre/crime">Криминал</Link></li>
//               <li><Link title="документальный" to="/category/movie/genre/documentary">Документальный</Link></li>
//               <li><Link title="драма" to="/category/movie/genre/drama">Драма</Link></li>
//               <li><Link title="семейный" to="/category/movie/genre/family">Семейный</Link></li>
//               <li><Link title="фэнтези" to="/category/movie/genre/fantasy">Фэнтези</Link></li>
//               <li><Link title="история" to="/category/movie/genre/story">История</Link></li>
//               <li><Link title="ужасы" to="/category/movie/genre/horrors">Ужасы</Link></li>
//               <li><Link title="музыка" to="/category/movie/genre/music">Музыка</Link></li>
//               <li><Link title="детектив" to="/category/movie/genre/detective">Детектив</Link></li>
//               <li><Link title="мелодрама" to="/category/movie/genre/melodrama">Мелодрама</Link></li>
//               <li><Link title="фантастика" to="/category/movie/genre/fantasy">Фантастика</Link></li>
//               <li><Link title="телевизионный" to="/category/movie/genre/television">Телевизионный</Link></li>
//               <li><Link title="триллер" to="/category/movie/genre/thriller">Триллер</Link></li>
//               <li><Link title="военный" to="/category/movie/genre/military">Военный</Link></li>
//               <li><Link title="вестерн" to="/category/movie/genre/western">Вестерн</Link></li>
//               </ul>
//             </li>
//             <li className="dropdown first">
//               <h1>
//                 <Link
//                   to="/?search=true&t=series"
//                   className="btn btn-default dropdown-toggle lv1"
//                   data-toggle="dropdown"
//                 >
//                   Cериалы<i className="fa fa-angle-down" aria-hidden="true"></i>
//                 </Link>
//               </h1>
//               <ul className="dropdown-menu level1">
//               <li><Link title="Боевик и Приключения" to="/category/series/genre/action-adventure">Боевик</Link></li>
//               <li><Link title="мультфильм" to="/category/series/genre/cartoon">Mультфильм</Link></li>
//               <li><Link title="комедия" to="/category/series/genre/comedy">Kомедия</Link></li>
//               <li><Link title="криминал" to="/category/series/genre/crime">Kриминал</Link></li>
//               <li><Link title="документальный" to="/category/series/genre/documentary">Dокументальный</Link></li>
//               <li><Link title="драма" to="/category/series/genre/drama">Dрама</Link></li>
//               <li><Link title="семейный" to="/category/series/genre/family">семейный</Link></li>
//               <li><Link title="Детский" to="/category/series/genre/child">Детский</Link></li>
//               <li><Link title="детектив" to="/category/series/genre/detective">детектив</Link></li>
//               <li><Link title="Новости" to="/category/series/genre/news">Новости</Link></li>
//               <li><Link title="Реалити-шоу" to="/category/series/genre/reality-show">Реалити-шоу</Link></li>
//               <li><Link title="НФ и Фэнтези" to="/category/series/genre/sf-and-fantasy">НФ и Фэнтези</Link></li>
//               <li><Link title="Мыльная опера" to="/category/series/genre/soap-opera">Мыльная опера</Link></li>
//               <li><Link title="Ток-шоу" to="/category/series/genre/talk-show">Ток-шоу</Link></li>
//               <li><Link title="Война и Политика" to="/category/series/genre/war-and-politics">Война и Политика</Link></li>
//               <li><Link title="вестерн" to="/category/series/genre/western">Bестерн</Link></li>
//             </ul>
//           </li>
              
//           </ul>
//           <ul className="nav navbar-nav flex-child-menu menu-right">
//             <li className="btn signupLink">
//               <a target="_blank" href="#">
//                 LIVE TV (coming soon)
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     // </Router>
//   );
// }

// export default Menu;
