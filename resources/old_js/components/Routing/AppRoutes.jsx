import React from "react";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";

function AppRoute({ permission, component: Component, ...rest }) {
  if (!permission) {
    return <div>Not Found</div>;
  }
  return <Route  {...rest} component={Component}  />;
}

AppRoute.propTypes = {
  component: PropTypes.func,
  permission: PropTypes.bool
};

AppRoute.defaultProps = {
  component: null,
  permission: true
};

export default withRouter(AppRoute);
