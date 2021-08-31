import React from "react";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import HamburgerMenu from "./menu/HamburgerMenu";
import NavigationMenu from "./menu/NavigationMenu";

import { MOBILE_QUERY } from "constants/mobile";

import imageURLDesktop from "static/gcclogo.png";
import imageURLMobile from "static/gcclogo-black.png";

const useStyles = makeStyles((theme) => ({
  navRoot: {
    flexGrow: 1,
    // margin: theme.spacing(3),
    position: "absolute",
    width: "100vw",
    fontFamily: "IBM Plex Sans",
  },
  menuDesktopButton: {
    marginRight: theme.spacing(5),
    height: 85,
  },
  menuMobileButton: {
    marginRight: theme.spacing(2),
    marginTop: ".75vh",
    height: 70,
  },
  mobileToolBar: {
    margin: ".5em",
    padding: 0,
  },
  titleGrow: {
    flexGrow: 1,
  },
  appBarDesktop: {
    padding: "1.5em",
    background: "transparent",
    boxShadow: "none",
  },
  appBarMobile: {
    background: "white",
    // boxShadow: "none",
  },
}));

const Navigation = (props) => {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: MOBILE_QUERY });

  const menuOptions = [
    {
      title: "About",
      type: "dropdown",
      children: [
        { title: "Welcome", type: "link", children: "/welcome" },
        { title: "Beliefs", type: "link", children: "/beliefs" },
        { title: "Staff", type: "link", children: "/staff" },
        {
          title: "Main Line Site",
          type: "link",
          children: "https://ml.gracecovenant.net",
        },
        { title: "AMI", type: "link", children: "https://amichurches.com/" },
      ],
    },
    { title: "Family Groups", type: "link", children: "/familygroup" },
    // { title: "Ministries", type: "link", children: "/ministries" },
    { title: "Giving", type: "link", children: "/giving" },
    { title: "Multimedia", type: "link", children: "/multimedia" },
    { title: "Events", type: "link", children: "/events" },
  ];

  return (
    <React.Fragment>
      <AppBar
        className={isMobile ? classes.appBarMobile : classes.appBarDesktop}
        position={isMobile ? "sticky" : "absolute"}
      >
        <Toolbar className={isMobile ? classes.mobileToolBar : ""}>
          <div className={classes.titleGrow}>
            <Link to="/">
              <img
                alt="nav-logo"
                className={
                  isMobile
                    ? classes.menuMobileButton
                    : classes.menuDesktopButton
                }
                src={isMobile ? imageURLMobile : imageURLDesktop}
              />
            </Link>
          </div>
          {isMobile ? (
            <HamburgerMenu menu={menuOptions} />
          ) : (
            <NavigationMenu menu={menuOptions} />
          )}
        </Toolbar>
      </AppBar>
      {props.children}
    </React.Fragment>
  );
};

Navigation.propTypes = {};

export default Navigation;
