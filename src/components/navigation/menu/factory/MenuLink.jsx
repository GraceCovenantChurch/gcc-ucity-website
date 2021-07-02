import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
    textTransform: "none",
  },
  menuText: {
    fontWeight: 500,
    fontSize: "1.15em",
  },
  link: {
    textDecorationLine: "none",
    textDecorationStyle: "solid",
  },
}));

const MenuLink = (props) => {
  const classes = useStyles();

  let menu = props.data;

  return (
    <Link className={classes.link} to={menu.children}>
      <Button className={classes.menuButton}>
        <p className={classes.menuText}>
          <b>{menu.title}</b>
        </p>
      </Button>
    </Link>
  );
};

export default MenuLink;
