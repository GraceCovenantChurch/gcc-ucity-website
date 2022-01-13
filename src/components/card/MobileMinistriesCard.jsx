import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import makeStyles from '@mui/styles/makeStyles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";

import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

import Center from "components/center/Center";

const useStyles = makeStyles((theme) => ({
  card: { display: "column" },
  banner: {
    display: "flex",
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
    paddingLeft: ".5em",
  },
  location: {
    marginBottom: 10,
  },
  eventStart: {},
  description: {
    paddingBottom: 7.5,
  },
}));

const MobileStaffCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.banner}>
        <CardMedia
          className={classes.media}
          component={"img"}
          image={props.image.fields.file.url}
        />
        <Center>
          <div className={classes.titleContainer}>
            <Typography className={classes.title} variant="h6" component="h6">
              {props.title}
            </Typography>
          </div>
        </Center>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.content}>
          <Typography
            className={classes.title}
            color="textSecondary"
            variant="subtitle1"
            component="p"
          >
            Contact
          </Typography>
          <Typography
            className={classes.location}
            variant="caption"
            component="h6"
          >
            {props.contact}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            variant="subtitle1"
            component="p"
          >
            Description
          </Typography>
          <Typography
            className={classes.eventStart}
            variant="caption"
            component="h6"
          >
            {props.description}
          </Typography>
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
    </Card>
  );
};

MobileStaffCard.propTypes = {
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

export default MobileStaffCard;
