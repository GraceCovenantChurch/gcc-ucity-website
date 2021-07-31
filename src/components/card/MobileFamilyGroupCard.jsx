import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Link from "components/link/Link";

const useStyles = makeStyles((theme) => ({
  card: { border: "none", boxShadow: "none" },
  media: { width: "100%", marginBottom: theme.spacing(2) },
  title: { fontWeight: "bold" },
  container: {
    top: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const MobileFamilyGroupCard = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.card}>
        <CardContent>
          <CardMedia
            className={classes.media}
            component={"img"}
            image={props.image.fields.file.url}
          />
          <Typography className={classes.title} variant="h5" component="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" component="div" color={"secondary"}>
            {props.subtitle}
          </Typography>
          <Typography paragraph variant="body1">
            {props.description}
          </Typography>
          <Link to={props.link}>{"Sign Up Here >"}</Link>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MobileFamilyGroupCard;
