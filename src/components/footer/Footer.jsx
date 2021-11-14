import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";

import makeStyles from '@mui/styles/makeStyles';
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Center from "components/center/Center";
import Card from "@mui/material/Card";
import Grid from "components/grid/Grid";
import GridItem from "components/grid/GridItem";

import { getSundayServices, massageServices } from "modules/Contentful";

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
      let results = [];
      results.push(...(await getSundayServices()));
      results = await massageServices(results);

      for (var service of results) {
        if (service.type === "sundayservice") {
          results = service;
        }
      }

      setSundayService(results);
    };

    updateSundayService();
  }, []);

  let currentSundayService = sundayService;

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
                  Service Time
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
                        currentSundayService.eventStart}
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
                    <InstagramIcon className={styles.icons} />
                  </Link>
                  <Link
                    className={styles.socialLinks}
                    href="https://www.facebook.com/gccphiladelphia/"
                  >
                    <FacebookIcon className={styles.icons} />
                  </Link>
                  <Link
                    className={styles.socialLinks}
                    href="https://www.youtube.com/user/GraceCovenantChurch"
                  >
                    <YouTubeIcon className={styles.icons} />
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
                    <AppleIcon className={styles.icons} />
                  </Link>
                  <Link className={styles.socialLinks} href={ANDROID}>
                    <ShopIcon className={styles.icons} />
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
