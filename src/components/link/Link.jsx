import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import isExternal from "is-url-external";

const Link = forwardRef((props, ref) => {
  const to = props.to;

  return isExternal(to) ? (
    <a ref={ref} href={to} {...props}>
      {props.children}
    </a>
  ) : (
    <RouterLink {...props} />
  );
});

Link.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Link;
