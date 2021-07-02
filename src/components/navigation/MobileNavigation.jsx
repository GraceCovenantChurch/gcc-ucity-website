import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import imageURL from "static/gcclogo.png";

import styles from "./MobileNavigation.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(6),
    position: "absolute",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: 100,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
  },
}));

const MobileNavigation = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Link to="/">
            <img className={classes.menuButton} src={imageURL} />
          </Link>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

MobileNavigation.propTypes = {};

export default MobileNavigation;
