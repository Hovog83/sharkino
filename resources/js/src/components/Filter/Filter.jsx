import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import queryString from "query-string";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import history from "../../utils/history.js";
import { getGander } from "../../redux/actions/getGander.js";

function Filter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const values_w = queryString.parse(location.search);
  const { gander } = useSelector((state) => ({
    gander: state.gander.gander || []
  }));
  const [formData, updateFormData] = useState({
    title: values_w.title || "",
    date_from: values_w.date_from || "",
    date_to: values_w.date_to || "",
    t: values_w.t || "",
    g: values_w.g ? (Array.isArray(values_w.g) ? values_w.g : [values_w.g]) : []
  });
  useEffect(() => {
    dispatch(getGander());
  }, [dispatch]);
  useEffect(() => {
    const values = queryString.parse(location.search, {
      arrayFormat: "index",
    });
    updateFormData({
      title: values.title || "",
      date_from: values.date_from || "",
      date_to: values.date_to || "",
      t: values.t || "",
      g: values.g ? (Array.isArray(values.g) ? values.g : [values.g]) : []
    });
  }, [location.search]);
  const handleInputChange = (newValue) => {
    updateFormData({
      ...formData,
      g: newValue.map(option => option.value)
    });
  };
  const handleChange = (e) => {
    if (e != null && e.target) {
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
      var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
      if (k && k !== "undefined" && v !== "" && v != null) {
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
    const data = { ...formData, search: true };
    delete data.page;
    updateFormData({ ...data, g: [] });
    history.push("/?" + serialize(data));
    window.location.reload();
  }

  return (
    <div className="sidebar">
      <form
        className="form-style-1"
        action="/search"
        id="filter"
        onSubmit={handleSubmit}>
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
                  max="2024"
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
                  max="2024"
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
                onChange={handleChange}>
                <option value="">Тип</option>
                <option value="movie" selected={formData.t === "movie"}> Фильмы</option>
                <option value="series" selected={formData.t === "series"}>Сериалы</option>
              </select>
            </div>
          </div>
          <div className="col-xs-12 col-md-3 form-it">
            <div>
              <Select
                name="g"
                isMulti={true}
                options={gander.map(g => ({ label: g, value: g }))}
                value={formData.g.map(g => ({ label: g, value: g }))}
                placeholder="Жанры"
                onChange={handleInputChange}
                id="gSe"

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
