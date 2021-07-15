import React from "react";
import { useMediaQuery } from "react-responsive";

import Grid from "@material-ui/core/Grid";

import { MOBILE_QUERY } from "constants/mobile";

const GridItem = (props) => {
  const isMobile = useMediaQuery({ query: MOBILE_QUERY });

  return (
    <Grid item xs={isMobile ? 12 : 4} sm={isMobile ? 12 : 4} {...props}>
      {props.children}
    </Grid>
  );
};

export default GridItem;
