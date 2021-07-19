import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SystemUpdateIcon from "@material-ui/icons/SystemUpdate";

import Link from "components/link/Link";

import { getMemoryVerse, massageMemoryVerse } from "modules/Contentful";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "4rem 2vw",
  },
  subtitle: {
    fontFamily: "Lora,sans-serif",
    fontSize: "18px",
    fontStyle: "italic",
    color: "gray",
    textAlign: "center",
    padding: 20,
  },
  passage: {
    fontFamily: "IBM Plex Sans",
    color: "black",
    textAlign: "center",
    padding: 20,
  },
  learnMore: {
    padding: 20,
    fontFamily: "Lora,sans-serif",
    fontSize: "18px",
    fontStyle: "italic",
    color: "gray",
    textAlign: "center",
    textDecoration: "none",
  },
  mediaContainer: {
    padding: 20,
    textAlign: "center",
  },
}));

const MemoryVerseContent = (props) => {
  const classes = useStyles();
  const [memoryVerse, setMemoryVerse] = useState(null);

  useEffect(() => {
    const updateVerses = async () => {
      const memoryVerse = await getMemoryVerse();

      let results = await massageMemoryVerse(memoryVerse);
      setMemoryVerse(results);
    };
    updateVerses();
  }, []);

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography className={classes.subtitle} variant="h5">
        {"Monthly Memory Verse"}
      </Typography>
      {memoryVerse ? (
        <React.Fragment>
          <Typography className={classes.passage} variant="h5">
            {memoryVerse.passage}
          </Typography>
          <Typography className={classes.learnMore} variant="h5">
            {memoryVerse.reference}
          </Typography>
          {memoryVerse.wallpapers ? (
            <div className={classes.mediaContainer}>
              <Divider />
              <Typography className={classes.learnMore} variant="h5">
                {"Click here for downloadable memory verse media!"}
              </Typography>
              {memoryVerse.wallpapers.map((media, index) => {
                let fields = media.fields;

                return (
                  <IconButton
                    color="default"
                    component={Link}
                    key={index}
                    to={fields.file.url}
                  >
                    <SystemUpdateIcon fontSize="large" />
                  </IconButton>
                );
              })}
            </div>
          ) : undefined}
        </React.Fragment>
      ) : undefined}
    </Container>
  );
};

export default MemoryVerseContent;
