import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import GridFactory from "components/grid/GridFactory";
import Link from "components/link/Link";
import ServicesCard from "components/card/ServicesCard";

import {
  getCollegeFridayServices,
  getSundayServices,
  getCrossroadFridayServices,
  massageServices,
} from "modules/Contentful";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "4rem 2vw",
  },
  subtitle: {
    fontFamily: "Lora,sans-serif",
    fontSize: "18px",
    fontStyle: "italic",
    color: "gray",
    textAlign: "center",
    padding: 20,
  },
  linkContainer: {
    textAlign: "center",
    padding: 20,
  },
  learnMore: {
    fontFamily: "Lora,sans-serif",
    fontSize: "18px",
    fontStyle: "italic",
    color: "gray",
    textDecoration: "none",
  },
}));

const ServicesContent = () => {
  const classes = useStyles();
  const [services, setServices] = useState(null);

  useEffect(() => {
    const updateServices = async () => {
      const collegeFridayResults = await getCollegeFridayServices();
      const crossroadFridayResults = await getCrossroadFridayServices();
      const sundayResults = await getSundayServices();
      let results = [
        ...collegeFridayResults,
        ...sundayResults,
        ...crossroadFridayResults,
      ];

      results = await massageServices(results);
      setServices(results);
    };
    updateServices();
  }, []);

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography className={classes.subtitle} variant="h5">
        {"Service Location and Times"}
      </Typography>
      {services ? (
        <Container>
          <GridFactory data={services} component={ServicesCard} />
        </Container>
      ) : undefined}
      <Typography className={classes.linkContainer} variant="h5">
        <Link to="/welcome" className={classes.learnMore}>
          {"Learn more >"}
        </Link>
      </Typography>
    </Container>
  );
};

export default ServicesContent;
