import React from "react";
import { Link } from "react-router-dom";


function Gender(props) {
    
  return (
        <div className="row ipad-width"> 
            <div className="col-xs-12 genderLinkdiv">
                <div className="col-md-2 col-xs-4"> <h2><Link title="Боевик" className="genderLink" to="/?g%5B0%5D=боевик&g%5B1%5D=Боевик%20и%20Приключения&search=true"> Боевик </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Приключения" className="genderLink" to="/?g%5B0%5D=приключения&g%5B1%5D=Боевик%20и%20Приключения&search=true"> Приключения </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Комедия" className="genderLink" to="/?g%5B0%5D=Комедия&search=true"> Комедия </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Мультфильм" className="genderLink" to="/?g%5B0%5D=мультфильм&search=true"> Мультфильм </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Криминал" className="genderLink" to="/?g%5B0%5D=Криминал&search=true"> Криминал </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Документальный" className="genderLink" to="/?g%5B0%5D=Документальный&search=true"> Документальный </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Драма" className="genderLink" to="/?g%5B0%5D=Драма&search=true"> Драма </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Мелодрама" className="genderLink" to="/?g%5B0%5D=Мелодрама&search=true"> Мелодрама </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Семейный" className="genderLink" to="/?g%5B0%5D=Семейный&search=true"> Семейный </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Фантастика/Фэнтези" className="genderLink" to="/?g%5B0%5D=Фантастика&g%5B1%5D=фэнтези&g%5B2%5D=НФ%20и%20Фэнтези&search=true"> Фантастика/Фэнтези </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="История" className="genderLink" to="/?g%5B0%5D=История&search=true"> История </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Ужасы" className="genderLink" to="/?g%5B0%5D=Ужасы&search=true"> Ужасы </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Музыка" className="genderLink" to="/?g%5B0%5D=Музыка&search=true"> Музыка </Link> </h2></div> 
                <div className="col-md-2 col-xs-4"> <h2><Link title="Мюзикл" className="genderLink" to="/?g%5B0%5D=музыка&search=true"> Мюзикл </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Детектив" className="genderLink" to="/?g%5B0%5D=Детектив&search=true"> Детектив </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Триллер" className="genderLink" to="/?g%5B0%5D=Триллер&search=true"> Триллер </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Война и Политика" className="genderLink" to="/?g%5B0%5D=военный&g%5B1%5D=Война%20и%20Политика&search=true"> Война и Политика </Link> </h2></div>
                <div className="col-md-2 col-xs-4"> <h2><Link title="Вестерн" className="genderLink" to="/?g%5B0%5D=Вестерн&search=true"> Вестерн </Link> </h2></div>
            </div>
        </div>
  );
}

export default Gender;
