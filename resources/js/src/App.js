import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './containers/Homepage/Hompage';
import Actorspage from './containers/Actorspage/ActorsPage';
import Films from './containers/Films/FilmPage';
function AppRoutes({ history }) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} history={history} exact />
        <Route path="/films/:id" element={<Films />} history={history} exact />
        <Route path="/actors/:id" element={<Actorspage />} exact />
        <Route path="/category/:type/genre/:genreName" element={<Homepage />} exact />
      </Routes>
    </div>
  )
};
export default AppRoutes;

