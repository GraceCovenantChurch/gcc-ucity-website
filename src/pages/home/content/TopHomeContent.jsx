import React from "react";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Link from "components/link/Link";

import { MOBILE_QUERY } from "constants/mobile";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 0,
    position: "relative",
    top: "57.5vh",
    left: "5%",
  },
  mobileContentContainer: {
    display: "block",
    margin: "0 auto",
    bottom: "-50vh",
    position: "relative",
    left: 0,
  },
  linkContainer: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "white",
      textDecorationThickness: 1,
    },
  },
  visionStatement: {
    fontFamily: "IBM Plex Sans,sans-serif",
    fontWeight: 700,
    fontSize: "calc(1.5vw + 1.25vh + .5vmin)",
    paddingBottom: ".25em",
  },
  mobileVisionStatement: {
    fontSize: "calc(2.25vw + 2vh + .10vmin)",
    textAlign: "center",
  },
  learnMore: {
    fontFamily: "Lora,sans-serif",
    fontSize: "20px",
    fontStyle: "italic",
    color: "white",
    textTransform: "none",
  },
  mobileLearnMore: {
    fontStyle: "italic",
    fontSize: "calc(1vw + 1vh + .5vmin)",
  },
}));

const TopHomeContent = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: MOBILE_QUERY });

  return (
    <Container
      className={clsx({
        [classes.contentContainer]: !isMobile,
        [classes.mobileContentContainer]: isMobile,
      })}
      maxWidth="lg"
    >
      <Typography
        className={clsx({
          [classes.visionStatement]: true,
          [classes.mobileVisionStatement]: isMobile,
        })}
      >
        {"Raising up kingdom workers"}
        <br />
        {"who are transformed by Christ"}
        <br />
        {"to influence the world."}
      </Typography>
      <div className={isMobile ? classes.linkContainer : undefined}>
        <Link
          to="/welcome"
          className={clsx({
            [classes.learnMore]: true,
            [classes.link]: true,
            [classes.mobileLearnMore]: isMobile,
          })}
        >
          {"Learn more >"}
        </Link>
      </div>
    </Container>
  );
};

export default TopHomeContent;
