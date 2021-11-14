import React from "react";
import PropTypes from "prop-types";

import makeStyles from '@mui/styles/makeStyles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  card: { height: 700 },
  content: {
    textAlign: "center",
  },
  media: {},
  title: {
    fontWeight: 600,
    paddingBottom: theme.spacing(2),
  },
  location: {
    marginBottom: 10,
  },
  description: {
    paddingBottom: 7.5,
  },
}));

const BeliefsCard = (props) => {
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
        <Typography
          className={classes.description}
          variant="body1"
          color="textSecondary"
          component="p"
        >
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

BeliefsCard.propTypes = {
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default BeliefsCard;
