import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingBottom: theme.spacing(3),
    // paddingTop: theme.spacing(3),
  },
}));

const Body = (props) => {
  const classes = useStyles();
  return (
    <Typography className={clsx(classes.body, props.className)} variant="body1">
      {props.children}
    </Typography>
  );
};

export default Body;
