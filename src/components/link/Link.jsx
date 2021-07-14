import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";
import isExternal from "is-url-external";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    fontFamily: "Lora,sansserif",
    "&:visited": {
      color: "rgb(0, 123, 255)",
    },
    // "&:hover": {
    //   textDecoration: "underline",
    // },
  },
}));

const Link = forwardRef((props, ref) => {
  const to = props.to;
  const classes = useStyles();

  return isExternal(to) ? (
    <a
      className={clsx(classes.link, props.className)}
      ref={ref}
      href={to}
      {...props}
    >
      {props.children}
    </a>
  ) : (
    <RouterLink className={clsx(classes.link, props.className)} {...props} />
  );
});

Link.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Link;
