import React from "react";
import PropTypes from "prop-types";

import makeStyles from '@mui/styles/makeStyles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Link from "components/link/Link";
import Center from "components/center/Center";

const useStyles = makeStyles((theme) => ({
  card: { display: "column" },
  banner: {
    display: "flex",
    padding: "1em",
  },
  content: {
    paddingTop: ".5rem",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    width: "auto",
    maxWidth: 75,
    height: "auto",
    maxHeight: 75,
    display: "block",
  },
  title: {
    fontWeight: 600,
    textAlign: "left",
  },
  titleContainer: {
    flexGrow: "1",
    padding: ".5rem",
  },
  location: {
    marginBottom: 10,
  },
  eventStart: {},
  description: {
    paddingBottom: 7.5,
  },
}));

const MobileEventsCard = (props) => {
  const classes = useStyles();

  //<Divider className={classes.divider} />

  return (
    <Card className={classes.card}>
      <CardContent className={classes.banner}>
        <CardMedia
          className={classes.media}
          component={"img"}
          image={props.image.fields.file.url}
        />
        <Center className={classes.titleContainer}>
          <Typography className={classes.title} variant="h5" component="h5">
            {props.title}
          </Typography>
        </Center>
      </CardContent>
      <CardContent className={classes.content}>
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
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MobileEventsCard;
