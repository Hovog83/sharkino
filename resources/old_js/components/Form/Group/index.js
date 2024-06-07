import React from "react";
import PropTypes from "prop-types";
import s from "./group.module.css";

function Group({ label, children }) {
  return (
    <div className={s.root}>
      {label && <div className={s.label}>{label}</div>}
      {children}
    </div>
  );
}

Group.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired
};
Group.defaultProps = {
  label: ""
};
export default Group;
