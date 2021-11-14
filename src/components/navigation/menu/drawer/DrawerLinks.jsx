import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import makeStyles from '@mui/styles/makeStyles';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import Link from "components/link/Link";

const useStyles = makeStyles((theme) => ({
  menuText: {},
  collapse: { paddingLeft: "1em" },
  menuSubtitle: {
    // fontWeight: 700,
    // fontSize: "large",
  },
  title: {
    flexGrow: 1,
  },
  logo: {},
}));

const DrawerLinks = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      {props.data.map((element, index) => {
        if (typeof element.children === "object") {
          return (
            <React.Fragment key={index}>
              <ListItem
                button
                onClick={handleClick}
                className={clsx(classes.menuSubtitle, classes.menuText)}
              >
                {element.title}
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                className={classes.collapse}
                in={open}
                timeout="auto"
                unmountOnExit
              >
                <DrawerLinks
                  data={element.children}
                  toggleDrawer={(flags) => props.toggleDrawer(false)}
                />
              </Collapse>
            </React.Fragment>
          );
        } else {
          return (
            <div
              role="presentation"
              onClick={props.toggleDrawer(false)}
              onKeyDown={props.toggleDrawer(false)}
              key={index}
            >
              <ListItem button component={Link} to={element.children}>
                <ListItemText
                  className={classes.menuText}
                  primary={element.title}
                />
              </ListItem>
            </div>
          );
        }
      })}
    </React.Fragment>
  );
};

DrawerLinks.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      children: PropTypes.any,
    })
  ),
  toggleDrawer: PropTypes.func.isRequired,
};
export default DrawerLinks;
