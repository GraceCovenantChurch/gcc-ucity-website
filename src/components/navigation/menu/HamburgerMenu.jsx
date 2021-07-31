import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import grey from "@material-ui/core/colors/grey";

import DrawerLinks from "./drawer/DrawerLinks";
import Link from "components/link/Link";

import imageURLMobile from "static/gcclogo-black.png";

const DRAWER_ANCHOR = "top";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: grey[900],
  },
  menuText: {
    textAlign: "left",
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 80,
  },
  logoContainer: {
    flex: 1,
  },
  close: {
    float: "left",
    marginRight: "auto",
  },
  headerBar: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

const HamburgerMenu = (props) => {
  let menuData = props.menu;
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={DRAWER_ANCHOR}
        open={drawer}
        onClose={toggleDrawer(false)}
      >
        <List>
          <List className={classes.headerBar}>
            <ListItem className={classes.logoContainer}>
              <img
                alt="nav-logo"
                className={classes.logo}
                src={imageURLMobile}
              />
            </ListItem>
            <IconButton
              edge="end"
              className={classes.close}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
          </List>
          <ListItem
            button
            component={Link}
            to={"/"}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <ListItemText className={classes.menuText} primary={"Home"} />
          </ListItem>
          <DrawerLinks
            toggleDrawer={(flag) => toggleDrawer(flag)}
            data={menuData}
          />
        </List>
      </Drawer>
    </React.Fragment>
  );
};

HamburgerMenu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      children: PropTypes.any,
    })
  ),
};

export default HamburgerMenu;
