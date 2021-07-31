import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";

import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";

import Center from "components/center/Center";

const useStyles = makeStyles((theme) => ({
  card: {},
  content: {
    textAlign: "center",
  },
  media: {},
  title: {
    fontWeight: 600,
  },
  expand: {
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  description: {
    textAlign: "left",
    paddingBottom: theme.spacing(1),
  },
}));

const MinistriesCard = (props) => {
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
        <Typography className={classes.title} variant="h4" component="h4">
          {props.title}
        </Typography>
        <Typography className={classes.title} variant="h6" component="h6">
          {props.jobTitle}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          variant="subtitle1"
          component="p"
        >
          {props.contact}
        </Typography>
      </CardContent>
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
          >
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </CardActions>
      </Center>
    </Card>
  );
};

MinistriesCard.propTypes = {
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MinistriesCard;
