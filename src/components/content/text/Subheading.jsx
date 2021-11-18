import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontWeight: "bold",
  },
}));

const Subheading = (props) => {
  const classes = useStyles();

  return (
    <Typography
      className={clsx(classes.subtitle, props.className)}
      variant="h5"
    >
      {props.children}
    </Typography>
  );
};

export default Subheading;
