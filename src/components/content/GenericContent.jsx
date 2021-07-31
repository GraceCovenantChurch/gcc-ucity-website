import React from "react";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import BackgroundImage from "components/background/BackgroundImage";
import Center from "components/center/Center";

import { MOBILE_QUERY } from "constants/mobile";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    height: "100vh",
  },
  title: {
    fontWeight: "bold",
  },
  paddingDesktop: {
    paddingLeft: theme.spacing(30),
    paddingRight: theme.spacing(30),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  paddingMobile: {
    padding: theme.spacing(2),
  },
  container: {
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
  const mobile = useMediaQuery({ query: MOBILE_QUERY });

  return (
    <React.Fragment>
      <BackgroundImage imageURL={props.imageURL}>
        <Center className={classes.titleContainer}>
          <Typography className={classes.title} variant="h2">
            {props.title}
          </Typography>
        </Center>
      </BackgroundImage>
      {props.children ? (
        <Container
          className={clsx({
            [classes.container]: true,
            [classes.paddingMobile]: mobile,
            [classes.paddingDesktop]: !mobile,
          })}
          maxWidth={false}
        >
          {props.children}
        </Container>
      ) : undefined}
    </React.Fragment>
  );
};

export default GenericContent;
