import React from "react";

import makeStyles from '@mui/styles/makeStyles';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import MenuLink from "./MenuLink";

/**
 * Giving credit where credit is due: Thank you Jules Dupont
 * https://stackoverflow.com/questions/48013913/open-menu-on-mouseover-and-close-menu-on-mouseleave-in-react
 */

const timeoutLength = 2000;
const isTouchScreen = matchMedia("(hover: none)").matches;

const useStyles = makeStyles((theme) => ({
  menu: {
    background: "transparent",
    boxShadow: "none",
    backgroundColor: "transparent",
    color: "transparent",
  },
  paper: {
    padding: theme.spacing(1),
  },
  dropdownButton: {
    marginRight: theme.spacing(2),
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
    textTransform: "none",
  },
  menuText: {
    fontWeight: 500,
    fontSize: "1.25em",
    color: "white",
  },
}));

const Dropdown = (props) => {
  const menuData = props.data;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mouseOverButton, setMouseOverButton] = React.useState(false);
  const [mouseOverMenu, setMouseOverMenu] = React.useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setMouseOverButton(false);
    setMouseOverMenu(false);
    setAnchorEl(null);
  };

  const enterButton = (event) => {
    setAnchorEl(event.currentTarget);
    setMouseOverButton(true);
  };

  const leaveButton = () => {
    // Set a timeout so that the menu doesn't close before the user has time to
    // move their mouse over it
    setTimeout(() => {
      setMouseOverButton(false);
    }, timeoutLength);
  };

  const enterMenu = () => {
    setMouseOverMenu(true);
  };

  const leaveMenu = () => {
    setTimeout(() => {
      setMouseOverMenu(false);
    }, timeoutLength);
  };

  let open =
    Boolean(anchorEl) && (isTouchScreen || mouseOverButton || mouseOverMenu);

  return (
    <React.Fragment>
      <Button
        className={classes.dropdownButton}
        aria-owns={open ? "simple-menu" : null}
        aria-haspopup="true"
        onClick={handleOpen}
        onMouseOver={isTouchScreen ? undefined : enterButton}
        onMouseLeave={isTouchScreen ? undefined : leaveButton}
        color="inherit"
      >
        <Typography className={classes.menuText}>{menuData.title}</Typography>
      </Button>
      <Menu
        className={classes.menu}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        classes={{
          paper: classes.menu,
        }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        MenuListProps={
          isTouchScreen
            ? undefined
            : {
                onMouseOver: enterMenu,
                onMouseLeave: leaveMenu,
              }
        }
      >
        {menuData.children.map((menu, index) => {
          return <MenuLink key={index} data={menu} />;
        })}
      </Menu>
    </React.Fragment>
  );
};

export default Dropdown;
