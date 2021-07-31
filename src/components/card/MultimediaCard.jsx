import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Center from "components/center/Center";
import Link from "components/link/Link";

const useStyles = makeStyles((theme) => ({
  card: {},
  content: {
    textAlign: "center",
  },
  media: { width: "20rem" },
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

const MultimediaCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Center>
        <CardMedia
          className={classes.media}
          component={"img"}
          image={props.image.fields.file.url}
        />
      </Center>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h5" component="h5">
          <Link to={props.link}>{props.title}</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

MultimediaCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MultimediaCard;
