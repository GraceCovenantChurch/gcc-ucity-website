import React from "react";
import PropTypes from "prop-types";

import Grid from "./Grid";
import GridItem from "./GridItem";

const GridFactory = (props) => {
  let Component = props.component;
  return (
    <Grid>
      {props.data.map((element, index) => {
        return (
          <GridItem key={index}>
            <Component {...element} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

GridFactory.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GridFactory;
