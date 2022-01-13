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

import Center from "components/center/Center";

const useStyles = makeStyles((theme) => ({
  card: {},
  content: {
    textAlign: "left",
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

const StaffCard = (props) => {
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
          {props.name}
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
          {props.email}
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            variant="subtitle1"
            component="p"
          >
            Biography
          </Typography>
          <Typography
            className={classes.description}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {props.biography}
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

StaffCard.propTypes = {
  biography: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default StaffCard;
