import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as LoadingIcon } from "./icon.svg";
import s from "./loading.module.css";

function Loading({ color, height, width, ...restProps }) {
  // useEffect(() => {
  //   return () => {
  //     clearTimeout(timeout);
  //   }
  // }, []);

  const style = {
    fill: color,
    height,
    width
  };

  return (
    <div className={s.wrap}>
      <div style={style} {...restProps}>
        <LoadingIcon />
      </div>
    </div>
  );
}
Loading.propTypes = {
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Loading.defaultProps = {
  color: "#2272C5",
  height: "10%",
  width: "10%"
};
export default Loading;
