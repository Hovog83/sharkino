import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import queryString from "query-string";
import Select from "react-select";
import { getGander } from "../../actions/getGander.js";


function Filter(props) {
  const dispatch = useDispatch();
  const values_w = queryString.parse(props.history.location.search);

console.log(values_w.t)
  const { ganders } = useSelector(({ gander }) => ({
    ganders: gander.gander
  }));

   const [formData, updateFormData] = useState({
     title: "",
     date_from: "",
     date_to: "",
     t: "",
     g: []
   });
  window.onpopstate = () => {
    const values = queryString.parse(props.history.location.search);
    updateFormData(values);
  };

  useEffect(() => {
    dispatch(getGander());
  }, [dispatch]);
  
  useEffect(() => {
    const values = queryString.parse(props.history.location.search, {
      arrayFormat: "index",
    });
    updateFormData(values);
  }, [dispatch, props.history.location.search]);
  

 const handleInputChange = (newValue) => {
    updateFormData({
      ...formData,
      g: newValue
    });     
 };

 const handleChange = e => {
   if (e != null && e.target ) {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
   }
 };

 
   function serialize(obj, prefix) {
     var str = [],
       p;
     for (p in obj) {
       var k = prefix ? prefix + "["+p+"]" : p,
         v = obj[p];
       if (k && k != "undefined" && v != "" && v != null) {
         str.push(
           v !== null && typeof v === "object"
             ? serialize(v, k)
             : encodeURIComponent(k) + "=" + encodeURIComponent(v)
         );
       }
     }
     return str.join("&");
   }

  function handleSubmit(e) {
    e.preventDefault();
    // updateFormData({page:1});
     const data = formData
     data.search = true 
    delete data.page;
    props.history.push("/?" + serialize(data));
  }

  return (
    <div className="sidebar">
      <form
        className="form-style-1"
        action="/search"
        id="filter"
        onSubmit={handleSubmit.bind(this)}
      >
        <div className="row">
          <div className="col-xs-12 form-it" style={{ zIndex: "9" }}>
            <input
              type="text"
              name="title"
              defaultValue={formData.title}
              onChange={handleChange}
              placeholder="Название"
            />
          </div>
          <div className="col-md-3 form-it">
            <div className="row">
              <div className="col-xs-6">
                <input
                  type="number"
                  onChange={handleChange}
                  name="date_from"
                  value={formData.date_from}
                  min="1970"
                  max="2020"
                  placeholder="Дата, с"
                />
              </div>
              <div className="col-xs-6">
                <input
                  type="number"
                  onChange={handleChange}
                  name="date_to"
                  value={formData.date_to}
                  min="1970"
                  max="2020"
                  placeholder="до"
                />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-3 form-it">
            <div className="">
              <select
                name="t"
                className="ui fluid type_ms select2"
                value={formData.t}
                onChange={handleChange}
              >
                <option value="">Тип</option>
                <option value="movie" selected={formData.t == "movie"}>ФИЛЬМЫ</option>
                <option value="series" selected={formData.t == "series"} >CЕРИАЛЫ</option>
              </select>
            </div>
          </div>
          <div className="col-xs-12 col-md-3 form-it">
            <div className="">
              <Select
                name="g"
                isMulti={true}
                value={formData.g}
                getOptionLabel={option => option}
                getOptionValue={option => option}
                options={ganders}
                id="gSe"
                placeholder="Жанры"
                className=""
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-3 col-xs-12 ">
            <input className="submit" type="submit" value="Поиск" />
          </div>
          <div className="col-md-3 col-xs-6 "></div>
        </div>
      </form>
    </div>
  );
}

export default Filter;
