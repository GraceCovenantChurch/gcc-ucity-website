import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Link from "components/link/Link";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "none",
    boxShadow: "none",
  },
  content: {
    textAlign: "center",
  },
  title: {
    fontWeight: 600,
    // paddingBottom: 7.5,
  },
  location: {
    marginBottom: 10,
  },
  eventStart: {
    // paddingBottom: 7.5,
  },
  description: {
    paddingBottom: 7.5,
  },
  link: {
    fontSize: 18,
  },
}));

const ServicesCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h5" component="h5">
          {props.title}
        </Typography>
        <Typography className={classes.eventStart} variant="h6" component="h6">
          {props.eventStart}
        </Typography>
        <Typography className={classes.location} variant="body1" component="h6">
          {props.location}
        </Typography>
        <Typography
          className={classes.description}
          variant="body1"
          color="textSecondary"
          component="p"
        >
          {props.description}
        </Typography>
        {props.mediaLink ? (
          <Link to={props.mediaLink}>{"Click Here"}</Link>
        ) : null}
      </CardContent>
    </Card>
  );
};

ServicesCard.propTypes = {
  description: PropTypes.string.isRequired,
  eventEnd: PropTypes.string,
  eventStart: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  mediaLink: PropTypes.string,
};

export default ServicesCard;
