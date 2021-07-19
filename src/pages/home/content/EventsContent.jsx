import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import GridFactory from "components/grid/GridFactory";
import Link from "components/link/Link";
import EventsCard from "components/card/EventsCard";

import { getHomeEvents, massageEvents } from "modules/Contentful";

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

const EventsContent = () => {
  const classes = useStyles();
  const [events, setEventsContent] = useState(null);

  useEffect(() => {
    const updateEventsContent = async () => {
      const eventResults = await getHomeEvents();

      let results = [...eventResults];

      results = await massageEvents(results);
      setEventsContent(results);
    };
    updateEventsContent();
  }, []);

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography className={classes.subtitle} variant="h5">
        {"Upcoming Events"}
      </Typography>
      {events ? (
        <Container>
          <GridFactory data={events} component={EventsCard} />
        </Container>
      ) : undefined}
      <Typography className={classes.linkContainer} variant="h5">
        <Link to="/events" className={classes.learnMore}>
          {"See all events >"}
        </Link>
      </Typography>
    </Container>
  );
};

export default EventsContent;
