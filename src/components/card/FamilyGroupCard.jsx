import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Center from "components/center/Center";
import Link from "components/link/Link";

const useStyles = makeStyles((theme) => ({
  card: { border: "none", boxShadow: "none" },
  media: { width: "30vw" },
  container: {
    top: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const FamilyGroupCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Center>
              <CardMedia
                className={classes.media}
                component={"img"}
                image={props.image.fields.file.url}
              />
            </Center>
          </Grid>
          <Grid className={classes.container} item xs={6}>
            <Typography variant="h5" component="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" component="div" color={"secondary"}>
              {props.subtitle}
            </Typography>
            <Typography paragraph variant="body1">
              {props.description}
            </Typography>
            <Link to={props.link}>{"Sign Up Here >"}</Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FamilyGroupCard;
