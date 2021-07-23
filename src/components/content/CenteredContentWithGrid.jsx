import React, { useState, useEffect } from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import GridFactory from "components/grid/GridFactory";
import Link from "components/link/Link";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "4rem 2vw",
  },
  subtitle: {
    fontSize: "18px",
    color: "gray",
    textAlign: "center",
    padding: 20,
  },
  linkContainer: {
    textAlign: "center",
    padding: 20,
  },
  learnMore: {
    fontSize: "18px",
    color: "gray",
    textDecoration: "none",
  },
}));

const CenteredContentWithGrid = (props) => {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    const updateData = async (fetchCall) => {
      let results = [];
      for (var fetch of fetchCall) {
        let callResults = await fetch();
        results.push(...callResults);
      }

      results = await props.massage(results);
      setData(results);
    };

    updateData(props.fetchCall);
  }, [props]);

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography
        className={clsx(classes.subtitle, props.titleClass)}
        variant="h5"
      >
        {props.upperTitle ? props.title.toUpperCase() : props.title}
      </Typography>
      {data ? (
        <Container>
          <GridFactory data={data} component={props.component} />
        </Container>
      ) : undefined}
      {props.link ? (
        <Typography className={classes.linkContainer} variant="h5">
          <Link to={props.link.url} className={classes.learnMore}>
            {props.link.text}
          </Link>
        </Typography>
      ) : undefined}
    </Container>
  );
};

export default CenteredContentWithGrid;
