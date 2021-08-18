import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AppleIcon from "@material-ui/icons/Apple";
import ShopIcon from "@material-ui/icons/Shop";

import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Center from "components/center/Center";
import Card from "@material-ui/core/Card";
import Grid from "components/grid/Grid";
import GridItem from "components/grid/GridItem";

import { getSundayServices } from "modules/Contentful";
import { formatTime } from "modules/Time";

import { MOBILE_QUERY } from "constants/mobile";
import { APPLE, ANDROID } from "constants/mobileapp";

import styles from "./Footer.module.scss";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "none",
    boxShadow: "none",
  },
  container: {
    // padding: "0 2vw",
  },
  mobileGrid: {
    marginTop: theme.spacing(1),
    width: "95vw",
  },
  grid: {
    margin: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    paddingBottom: theme.spacing(1.5),
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
  location: {
    textAlign: "center",
  },
}));

const Footer = () => {
  const mobile = useMediaQuery({ query: MOBILE_QUERY });
  let currentYear = new Date().getFullYear();
  const [sundayService, setSundayService] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const updateSundayService = async () => {
      let results = await getSundayServices();
      setSundayService(results);
    };

    updateSundayService();
  }, []);

  // I wish contentful allowed limiting number of entries that you query
  let currentSundayService =
    sundayService > 0 ? sundayService[0].fields : undefined;

  return (
    <footer className={styles.footer}>
      <Container
        className={classes.container}
        disableGutters={true}
        maxWidth="lg"
      >
        <Center>
          <Grid
            spacing={5}
            className={mobile ? classes.mobileGrid : classes.grid}
          >
            <GridItem>
              <Card className={classes.card}>
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="h5"
                >
                  Service Times
                </Typography>
                {currentSundayService ? (
                  <React.Fragment>
                    <Typography
                      className={classes.description}
                      variant="h6"
                      component="h6"
                    >
                      {currentSundayService.title +
                        " at " +
                        formatTime(currentSundayService.eventStart)}
                    </Typography>
                    <Typography
                      className={classes.location}
                      variant="body1"
                      component="h6"
                    >
                      {currentSundayService.location}
                    </Typography>
                  </React.Fragment>
                ) : undefined}
              </Card>
            </GridItem>
            <GridItem>
              <Card className={classes.card}>
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="h5"
                >
                  Social
                </Typography>
                <Center>
                  <Link
                    className={styles.socialLinks}
                    href="https://www.instagram.com/gccphiladelphia/"
                  >
                    <InstagramIcon />
                  </Link>
                  <Link
                    className={styles.socialLinks}
                    href="https://www.facebook.com/gccphiladelphia/"
                  >
                    <FacebookIcon />
                  </Link>
                  <Link
                    className={styles.socialLinks}
                    href="https://www.youtube.com/user/GraceCovenantChurch"
                  >
                    <YouTubeIcon />
                  </Link>
                </Center>
              </Card>
            </GridItem>
            <GridItem>
              <Card className={classes.card}>
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="h5"
                >
                  Mobile App
                </Typography>
                <Center>
                  <Link className={styles.socialLinks} href={APPLE}>
                    <AppleIcon />
                  </Link>
                  <Link className={styles.socialLinks} href={ANDROID}>
                    <ShopIcon />
                  </Link>
                </Center>
              </Card>
            </GridItem>
          </Grid>
        </Center>
      </Container>
      <div className={styles.content}>
        <p className={styles.copyright}>
          Copyright &copy; 1996-{currentYear}. Official website of{" "}
          <a className={styles.footerLinks} href="/">
            Grace Covenant Church
          </a>{" "}
          in Philadelphia, PA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
