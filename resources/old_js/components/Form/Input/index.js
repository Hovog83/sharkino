import React, { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import s from "./input.module.scss";

function Input(props) {
  const { search, validation, name, type, readonly, ...rest } = props;
 
  return (
    <input
      className={classNames(
        s.input,
        search ? s.search : {}
      )}
      readOnly={readonly}
      type={type}
      {...rest}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  validation: PropTypes.instanceOf(RegExp),
  // errorMessage: PropTypes.string,
  type: PropTypes.string,
  readonly: PropTypes.bool,
  search: PropTypes.bool
};

Input.defaultProps = {
  validation: new RegExp(""),
  // errorMessage: "incorrect",
  type: "",
  readonly: false,
  search: false
};

export default memo(Input);
