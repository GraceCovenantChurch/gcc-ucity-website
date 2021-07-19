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
    top: "60%",
    left: "5%",
  },
  mobileContentContainer: {
    display: "block",
    margin: "0 auto",
    bottom: "20vh",
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
  pitch: {
    fontSize: "20px",
    color: "white",
    textTransform: "none",
    paddingBottom: ".25em",
  },
  mobilePitch: {
    textAlign: "center",
  },
  familyGroup: {
    fontFamily: "IBM Plex Sans,sans-serif",
    fontWeight: 700,
    fontSize: "calc(1.5vw + 1.25vh + .5vmin)",
    paddingBottom: ".25em",
  },
  mobileFamilyGroup: {
    fontSize: "calc(2.5vw + 2vh + .5vmin)",
    textAlign: "center",
  },
  signuphere: {
    fontFamily: "Lora,sans-serif",
    fontSize: "20px",
    fontStyle: "italic",
    color: "white",
    textTransform: "none",
  },
  mobileSignuphere: {
    fontStyle: "italic",
    fontSize: "calc(1vw + 1vh + .5vmin)",
    textAlign: "center",
  },
}));

const FamilyGroupContent = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: MOBILE_QUERY });

  return (
    <Container
      className={clsx({
        [classes.contentContainer]: true,
        [classes.mobileContentContainer]: isMobile,
      })}
      maxWidth="lg"
    >
      <Typography
        className={clsx({
          [classes.signuphere]: true,
          [classes.mobileSignuphere]: isMobile,
        })}
      >
        {"Community"}
      </Typography>
      <Typography
        className={clsx({
          [classes.familyGroup]: true,
          [classes.mobileFamilyGroup]: isMobile,
        })}
      >
        {"Family Group"}
      </Typography>
      <Typography
        className={clsx({
          [classes.pitch]: true,
          [classes.mobilePitch]: isMobile,
        })}
      >
        {"You haven't checked out GCC unless"} <br />
        {"you've checked out our family groups."}
      </Typography>
      <div className={isMobile ? classes.linkContainer : undefined}>
        <Link
          to="/familygroup"
          className={clsx({
            [classes.signuphere]: true,
            [classes.link]: true,
            [classes.mobileSignuphere]: isMobile,
          })}
        >
          {"Sign up here >"}
        </Link>
      </div>
    </Container>
  );
};

export default FamilyGroupContent;
