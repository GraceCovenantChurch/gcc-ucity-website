import React from "react";
import { useMediaQuery } from "react-responsive";

import Grid from "@material-ui/core/Grid";

import { MOBILE_QUERY } from "constants/mobile";

// Talking specifically about the sm=7
// This is kind of confusing for me. I'm not entirely sure what the best way
// to set up the Grid Item so that it's just column view.
// I think it's a configuration on the Grid Component to do column style but
// from what I remember the spacing got really wonky.

const GridItem = (props) => {
  const isMobile = useMediaQuery({ query: MOBILE_QUERY });

  return (
    <Grid item xs={isMobile ? 12 : 4} sm={isMobile ? 7 : 4} {...props}>
      {props.children}
    </Grid>
  );
};

export default GridItem;
