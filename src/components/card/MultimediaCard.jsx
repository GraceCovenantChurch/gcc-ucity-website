import React from "react";
import PropTypes from "prop-types";

import makeStyles from '@mui/styles/makeStyles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
        <Link to={props.link}>
          <CardMedia
            className={classes.media}
            component={"img"}
            image={props.image.fields.file.url}
          />
        </Link>
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
