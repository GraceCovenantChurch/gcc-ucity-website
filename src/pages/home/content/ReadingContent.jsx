import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Link from "components/link/Link";

import { getReadingContent, massageReadingContent } from "modules/Contentful";
import { MOBILE_QUERY } from "constants/mobile";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: 0,
    position: "relative",
    top: "52.5%",
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
    marginBottom: 20,
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

const ReadingContent = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: MOBILE_QUERY });
  const [reading, setReading] = useState(null);

  useEffect(() => {
    const updateReadingContent = async () => {
      const readingResults = await getReadingContent();

      let results = [...readingResults];

      results = massageReadingContent(results);
      setReading(results);
    };
    updateReadingContent();
  }, []);

  return (
    <Container
      className={clsx({
        [classes.contentContainer]: true,
        [classes.mobileContentContainer]: isMobile,
      })}
      maxWidth="lg"
    >
      {reading ? (
        <React.Fragment>
          <Typography
            className={clsx({
              [classes.signuphere]: true,
              [classes.mobileSignuphere]: isMobile,
            })}
          >
            {"Current Reading Plan"}
          </Typography>
          <Typography
            className={clsx({
              [classes.familyGroup]: true,
              [classes.mobileFamilyGroup]: isMobile,
            })}
          >
            {reading.title}
          </Typography>
          {reading.description ? (
            <Typography
              className={clsx({
                [classes.pitch]: true,
                [classes.mobilePitch]: isMobile,
              })}
            >
              {reading.description}
            </Typography>
          ) : undefined}
          {reading.mediaLinks.map((link, index) => {
            return (
              <div
                className={isMobile ? classes.linkContainer : undefined}
                key={index}
              >
                <Link
                  to={link}
                  className={clsx({
                    [classes.signuphere]: true,
                    [classes.link]: true,
                    [classes.mobileSignuphere]: isMobile,
                  })}
                >
                  {"Click here >"}
                </Link>
              </div>
            );
          })}
          {reading.readingMedia.map((link, index) => {
            let fields = link.fields;
            return (
              <div
                className={isMobile ? classes.linkContainer : undefined}
                key={index}
              >
                <Link
                  to={fields.file.url}
                  className={clsx({
                    [classes.signuphere]: true,
                    [classes.link]: true,
                    [classes.mobileSignuphere]: isMobile,
                  })}
                >
                  {fields.title + " >"}
                </Link>
              </div>
            );
          })}
        </React.Fragment>
      ) : undefined}
      <Typography
        className={clsx({
          [classes.familyGroup]: true,
          [classes.mobileFamilyGroup]: isMobile,
        })}
      >
        {"AMI Quiet Times"}
      </Typography>
      <div className={isMobile ? classes.linkContainer : undefined}>
        <Link
          to="https://amiquiettimes.com/"
          className={clsx({
            [classes.signuphere]: true,
            [classes.link]: true,
            [classes.mobileSignuphere]: isMobile,
          })}
        >
          {"AMI Quiet Time Blog >"}
        </Link>
      </div>
    </Container>
  );
};

export default ReadingContent;
