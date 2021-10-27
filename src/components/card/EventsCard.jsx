import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import makeStyles from '@mui/styles/makeStyles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";

import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

import Link from "components/link/Link";
import Center from "components/center/Center";

const useStyles = makeStyles((theme) => ({
  card: {},
  content: {
    textAlign: "center",
  },
  media: {},
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

const EventsCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
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
        </Collapse>
        <Center>
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              size="large">
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </CardActions>
        </Center>
      </CardContent>
    </Card>
  );
};

EventsCard.propTypes = {
  description: PropTypes.string.isRequired,
  eventEnd: PropTypes.string,
  eventStart: PropTypes.string,
  location: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(PropTypes.object),
};

export default EventsCard;
