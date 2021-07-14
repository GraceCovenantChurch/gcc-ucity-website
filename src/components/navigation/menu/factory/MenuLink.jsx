import React, { forwardRef, memo } from "react";
import PropTypes from "prop-types";

import Link from "components/link/Link";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
    textTransform: "none",
    textDecorationLine: "none",
    textDecorationStyle: "solid",
  },
  menuText: {
    fontWeight: 500,
    fontSize: "1.25em",
  },
}));

const MenuLink = forwardRef((props, ref) => {
  const classes = useStyles();

  let menu = props.data;

  return (
    <Button
      ref={ref}
      className={classes.menuButton}
      component={Link}
      to={menu.children}
    >
      <Typography className={classes.menuText}>{menu.title}</Typography>
    </Button>
  );
});

MenuLink.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    children: PropTypes.any,
  }),
};

const areEqual = (pevState, nextState) => {
  return pevState.count === nextState.count;
};

export default memo(MenuLink, areEqual);
