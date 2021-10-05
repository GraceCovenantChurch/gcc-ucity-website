import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Scroll from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import { isExternal } from "modules/IsExternal";

import { makeStyles } from "@material-ui/core/styles";

const ScrollLink = Scroll.Link;

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    "&:visited": {
      color: "rgb(0, 123, 255)",
    },
    fontSize: 16,
  },
}));

const Link = forwardRef((props, ref) => {
  const to = props.to;
  const classes = useStyles();

  if (props.scroll) {
    console.log(props);
    return (
      <ScrollLink
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
        to={to}
        {...props}
      >
        {props.children}
      </ScrollLink>
    );
  } else {
    return isExternal(to) ? (
      <a
        className={clsx(classes.link, props.className)}
        ref={ref}
        href={to}
        target="_blank"
        rel="noreferrer"
        scroll={undefined}
        {...props}
      >
        {props.children}
      </a>
    ) : (
      <RouterLink className={clsx(classes.link, props.className)} {...props} />
    );
  }
});

Link.propTypes = {
  to: PropTypes.string.isRequired,
  scroll: PropTypes.string,
  containerElement: PropTypes.string,
};

export default Link;
