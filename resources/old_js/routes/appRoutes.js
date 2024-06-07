import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoute from "../components/Routing/AppRoutes";
import Homepage from "../containers/Homepage";
import Films from "../containers/Films";
import Actorspage from "../containers/Actorspage";


function AppRoutes({ history }) {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/am" element={<Homepage />} exact />
          <Route path="/films/:id" element={<Films />} exact />
          <Route path="/category/:type/genre/:genreName" element={<Homepage />} exact />
          <Route path="/actors/:id" element={<Actorspage />} exact />
        </Routes>
      </BrowserRouter>
  );
}
AppRoutes.propTypes = {
  history: PropTypes.shape({}).isRequired
};
export default AppRoutes;
