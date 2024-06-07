import React, { memo } from "react";
import InputMask from "react-input-mask";
import classNames from "classnames";
import PropTypes from "prop-types";
import s from "./input.module.scss";

function Input(props) {
  const { search, name, validation, ...rest } = props;
 
  // eslint-disable-next-line no-unused-vars
  return (
    <InputMask
      className={classNames(
        s.input,
        search ? s.search : {}
      )}
      maskChar={null}
      // onFocus={onInputFocus}
      mask="+7 (999) 999-99-99"
      {...rest}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onFocus: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  validation: PropTypes.instanceOf(RegExp),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  search: PropTypes.bool
};

Input.defaultProps = {
  validation: new RegExp(""),
  errorMessage: "Phone number is incorrect",
  search: false
};

export default memo(Input);
