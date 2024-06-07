import React from "react";
import PropTypes from "prop-types";
import { Route, useNavigate } from "react-router-dom";

const AppRoute=({ permission, component: Component, ...rest })=> {
  const navigate = useNavigate();

  if (!permission) {
    navigate('/not-found'); 
    return null; 
  }

  return <Route {...rest} element={<Component />} />;
}

AppRoute.propTypes = {
  component: PropTypes.elementType.isRequired, 
  permission: PropTypes.bool,
};

AppRoute.defaultProps = {
  permission: true,
};

export default AppRoute;
