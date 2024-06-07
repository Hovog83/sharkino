import React, { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import s from "./textarea.module.css";

function Textarea(props) {
  const { search, validation, name, readonly, ...rest } = props;
  
  return (
    <textarea
      className={classNames(
        s.input,
        search ? s.search : {}
      )}
      readOnly={readonly}
      {...rest}
    />
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  validation: PropTypes.instanceOf(RegExp),
  // errorMessage: PropTypes.string,
  readonly: PropTypes.bool,
  search: PropTypes.bool
};

Textarea.defaultProps = {
  validation: new RegExp(""),
  // errorMessage: "incorrect",
  readonly: false,
  search: false
};

export default memo(Textarea);
