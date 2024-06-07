import React from "react";
import PropTypes from "prop-types";
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import AppRoutes from "./appRoutes";
import ErrorBoundary from "../components/ErrorBoundary";

const Root = ({ history, store }) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ErrorBoundary>
          <AppRoutes history={history} />
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};
Root.propTypes = {
  history: PropTypes.shape({}).isRequired
};

export default Root;
