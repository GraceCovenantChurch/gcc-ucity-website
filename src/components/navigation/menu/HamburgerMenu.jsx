import React from "react";
import PropTypes from "prop-types";

import makeStyles from '@mui/styles/makeStyles';
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import DrawerLinks from "./drawer/DrawerLinks";

import Link from "components/link/Link";
import imageURLMobile from "static/gcclogo-black.png";

import { grey } from '@mui/material/colors';

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
        size="large">
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
              size="large">
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
