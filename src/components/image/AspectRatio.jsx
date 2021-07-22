import React from "react";
import PropTypes from "prop-types";

const AspectRatio = (props) => (
  <div
    style={{
      width: "100%",
      position: "relative",
      paddingTop: `${100 / props.ratio}%`,
    }}
    className={props.className}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      {props.children}
    </div>
  </div>
);

AspectRatio.propTypes = {
  ratio: PropTypes.number.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

AspectRatio.defaultProps = {
  children: null,
};

export default AspectRatio;
