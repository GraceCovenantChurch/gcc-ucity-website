import React from "react";
import clsx from "clsx";

import makeStyles from '@mui/styles/makeStyles';
import Typography from "@mui/material/Typography";

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
