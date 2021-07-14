import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { default as MGrid } from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  grid: {
    flexGrow: 1,
  },
}));

const Grid = (props) => {
  const classes = useStyles();

  return (
    <MGrid container className={classes.grid} spacing={5} {...props}>
      {props.children}
    </MGrid>
  );
};

export default Grid;
