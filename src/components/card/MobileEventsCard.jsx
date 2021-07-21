import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Link from "components/link/Link";

const useStyles = makeStyles((theme) => ({
  card: { display: "flex" },
  content: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },
  media: {
    width: "33vw",
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
}));

const MobileEventsCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component={"img"}
        image={props.image.fields.file.url}
      />
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h5" component="h5">
          {props.title}
        </Typography>
        <Typography className={classes.eventStart} variant="h6" component="h6">
          {props.eventStart}
        </Typography>

        {props.location ? (
          <Typography
            className={classes.location}
            variant="body1"
            component="h6"
          >
            {props.location}
          </Typography>
        ) : null}

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

        {props.files
          ? props.files.map((element, index) => {
              let fields = element.fields;

              return (
                <Link key={index} to={fields.file.url}>
                  {"View the file"}
                </Link>
              );
            })
          : null}
      </CardContent>
    </Card>
  );
};

MobileEventsCard.propTypes = {
  description: PropTypes.string.isRequired,
  eventEnd: PropTypes.string,
  eventStart: PropTypes.string,
  location: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(PropTypes.object),
};

export default MobileEventsCard;
