import React from "react";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

import NavigationMenu from "./menu/NavigationMenu";

import imageURLDesktop from "static/gcclogo.png";
import imageURLMobile from "static/gcclogo-black.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin: theme.spacing(3),
    position: "absolute",
    width: "100vw",
    fontFamily: "IBM Plex Sans",
  },
  menuButton: {
    marginRight: theme.spacing(5),
    height: 85,
  },
  titleGrow: {
    flexGrow: 1,
  },
  appBarDesktop: {
    background: "transparent",
    boxShadow: "none",
  },
  appBarMobile: {
    background: "white",
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: `(max-width: 1010px)` });

  const menuOptions = [
    // {
    //   title: "About",
    //   type: "dropdown",
    //   children: [{ title: "About", link: "/about" }],
    // },
    { title: "Family Groups", type: "link", children: "/familygroup" },
    { title: "Ministries", type: "link", children: "/ministries" },
    { title: "Giving", type: "link", children: "/giving" },
    { title: "Multimedia", type: "link", children: "/multimedia" },
    { title: "Events", type: "link", children: "/events" },
  ];

  return (
    <div className={classes.root}>
      <Box my="1.5em" mx="2.5em">
        <AppBar
          className={isMobile ? classes.appBarMobile : classes.appBarDesktop}
          position="static"
        >
          <Toolbar>
            <div className={classes.titleGrow}>
              <Link to="/">
                <img
                  alt="nav-logo"
                  className={classes.menuButton}
                  src={isMobile ? imageURLMobile : imageURLDesktop}
                />
              </Link>
            </div>
            {isMobile ? <div /> : <NavigationMenu menu={menuOptions} />}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
