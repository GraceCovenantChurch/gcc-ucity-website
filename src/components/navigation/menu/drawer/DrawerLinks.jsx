import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

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
            <div className={""} key={index}>
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
            </div>
          );
        } else {
          return (
            <div
              className={clsx(classes.list, [classes.fullList])}
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
