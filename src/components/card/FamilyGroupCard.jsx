import React from "react";

import makeStyles from '@mui/styles/makeStyles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
