import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Center.module.scss";

const Center = (props) => {
  return (
    <div className={clsx(styles.center, props.className)}>{props.children}</div>
  );
};

Center.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Center;
