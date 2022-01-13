import React from "react";
import clsx from "clsx";

import makeStyles from "@mui/styles/makeStyles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import BackgroundImage from "components/background/BackgroundImage";

import Link from "components/link/Link";

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
    fontSize: "20px",
    color: "white",
    textTransform: "none",
  },
  mobileLink: {
    fontSize: "18px",
  },
  title: {
    fontFamily: "IBM Plex Sans,sans-serif",
    fontWeight: 700,
    fontSize: "calc(1.5vw + 1.25vh + .5vmin)",
    paddingBottom: ".25em",
    color: "white",
  },
  mobileTitle: {
    fontSize: "calc(2.25vw + 2vh + .10vmin)",
    textAlign: "center",
  },
  description: {
    fontSize: "20px",
    color: "white",
    textTransform: "none",
    paddingBottom: ".25em",
  },
  mobileDescription: {
    textAlign: "center",
  },
}));

const ContentWithImage = (props) => {
  const classes = useStyles();
  const isMobile = props.isMobile;

  let title = props.title.split(/\r?\n/);
  let description = props.description
    ? props.description.split(/\r?\n/)
    : undefined;

  return (
    <BackgroundImage imageURL={props.imageURL}>
      <Container
        className={clsx({
          [classes.contentContainer]: !isMobile,
          [classes.mobileContentContainer]: isMobile,
        })}
        maxWidth="lg"
      >
        <Typography
          className={clsx({
            [classes.title]: true,
            [classes.mobileTitle]: isMobile,
          })}
        >
          {title.map((string, index) => {
            return (
              <React.Fragment key={index}>
                {string}
                <br />
              </React.Fragment>
            );
          })}
        </Typography>
        {props.description ? (
          <Typography
            className={clsx({
              [classes.description]: true,
              [classes.mobileDescription]: isMobile,
            })}
          >
            {description.map((string, index) => {
              return (
                <React.Fragment key={index}>
                  {string}
                  <br />
                </React.Fragment>
              );
            })}
          </Typography>
        ) : undefined}

        {props.link ? (
          <div className={isMobile ? classes.linkContainer : undefined}>
            <Link
              to={props.link.url}
              className={clsx({
                [classes.link]: true,
                [classes.mobileLearnMore]: isMobile,
              })}
              scroll={props.link.scroll ? "true" : "false"}
              onSetActive={props.link.scroll ? props.scrollHandler : undefined}
              {...props.link}
            >
              {props.link.text}
            </Link>
          </div>
        ) : undefined}
      </Container>
    </BackgroundImage>
  );
};

export default ContentWithImage;
