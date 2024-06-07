import React from "react";
import PropTypes from "prop-types";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }
  componentDidCatch(error) {
    this.setState({ error: true, errorMessage: error.message });
  }
  render() {
    const { children } = this.props;
    const { error = false } = this.state;

    if (error) {
      return (
        <div >
          <p >Something went wrong!</p>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
