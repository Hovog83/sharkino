import React from "react";
import { Link } from "react-router-dom";

const Gender = () => {
  const genres = [
    "Боевик", "Приключения", "Комедия", "Мультфильм", "Криминал",
    "Документальный", "Драма", "Мелодрама", "Семейный", "Фантастика/Фэнтези",
    "История", "Ужасы", "Музыка", "Мюзикл", "Детектив", "Триллер",
    "Война и Политика", "Вестерн"
  ];
  return (
    <div className="row ipad-width"> 
      <div className="col-xs-12 genderLinkdiv">
        {genres.map((genre, index) => (
          <div className="col-md-2 col-xs-4" key={index}>
            <h2>
              <Link
                title={genre}
                className="genderLink"
                to={`/?g%5B0%5D=${genre}&search=true`}
              >
                {genre}
              </Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gender;

