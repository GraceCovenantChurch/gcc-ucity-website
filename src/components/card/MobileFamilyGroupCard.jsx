import React from "react";

import makeStyles from '@mui/styles/makeStyles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

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
