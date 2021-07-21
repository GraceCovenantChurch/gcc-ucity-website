import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
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
  defaultLink: {
    fontSize: "20px",
    color: "white",
    textTransform: "none",
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

const ContentWithImageAPI = (props) => {
  const classes = useStyles();
  const isMobile = props.isMobile;
  const [data, setData] = useState(null);

  useEffect(() => {
    const updateData = async (fetchCall) => {
      let results = [];
      for (var fetch of fetchCall) {
        let callResults = await fetch();
        results.push(...callResults);
      }

      results = await props.massage(results);
      setData(results);
    };

    updateData(props.fetchCall);
  }, [props]);

  let title = props.title.split(/\r?\n/);
  let DefaultDescription = props.defaultDescription;

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
        {data ? (
          <React.Fragment>
            <Typography
              className={clsx({
                [classes.description]: true,
                [classes.mobileDescription]: isMobile,
              })}
            >
              {data.description}
            </Typography>
            <Typography
              className={clsx({
                [classes.description]: true,
                [classes.mobileDescription]: isMobile,
              })}
            >
              <DefaultDescription
                className={clsx({
                  [classes.medialink]: true,
                  [classes.defaultLink]: true,
                  [classes.mobileMediaLink]: isMobile,
                })}
              />
            </Typography>

            {data.mediaLinks.map((link, index) => {
              return (
                <div
                  className={isMobile ? classes.linkContainer : undefined}
                  key={index}
                >
                  <Link
                    to={link}
                    className={clsx({
                      [classes.medialink]: true,
                      [classes.link]: true,
                      [classes.mobileMediaLink]: isMobile,
                    })}
                  >
                    {data.title + " >"}
                  </Link>
                </div>
              );
            })}
            {data.readingMedia.map((link, index) => {
              let fields = link.fields;
              return (
                <div
                  className={isMobile ? classes.linkContainer : undefined}
                  key={index}
                >
                  <Link
                    to={fields.file.url}
                    className={clsx({
                      [classes.medialink]: true,
                      [classes.link]: true,
                      [classes.mobileMediaLink]: isMobile,
                    })}
                  >
                    {data.title + " >"}
                  </Link>
                </div>
              );
            })}
          </React.Fragment>
        ) : undefined}
      </Container>
    </BackgroundImage>
  );
};

export default ContentWithImageAPI;
