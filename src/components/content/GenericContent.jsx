import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import BackgroundImage from "components/background/BackgroundImage";
import Center from "components/center/Center";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    height: "100vh",
  },
  title: {
    fontWeight: "bold",
  },
  container: {
    padding: theme.spacing(5),
    textAlign: "left",
    position: "relative",
    color: "black",
  },
  body: {
    paddingBottom: theme.spacing(3),
  },
}));

const GenericContent = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <BackgroundImage imageURL={props.imageURL}>
        <Center className={classes.titleContainer}>
          <Typography className={classes.title} variant="h2">
            {props.title}
          </Typography>
        </Center>
      </BackgroundImage>
      <Container className={classes.container} maxWidth={false}>
        {props.children}
      </Container>
    </React.Fragment>
  );
};

export default GenericContent;
