import React from "react";

import makeStyles from '@mui/styles/makeStyles';
import { default as MGrid } from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  grid: {
    flexGrow: 1,
  },
}));

const Grid = (props) => {
  const classes = useStyles();

  return (
    <MGrid
      container
      justifyContent="center"
      className={classes.grid}
      spacing={5}
      {...props}
    >
      {props.children}
    </MGrid>
  );
};

export default Grid;
