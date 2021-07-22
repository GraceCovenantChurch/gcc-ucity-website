import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import BackgroundImage from "components/background/BackgroundImage";
import Center from "components/center/Center";
import Link from "components/link/Link";
import AspectRatio from "components/image/AspectRatio";

import welcomeURL from "static/images/welcome/welcome_background.jpg";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    height: "100vh",
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
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
    // paddingTop: theme.spacing(3),
  },
  media: {
    margin: "30px auto",
    width: "75%",
    height: "550px",
    background: "gray",
  },
  maps: {
    width: "75%",
    height: "75%",
  },
  afterMap: {
    paddingTop: theme.spacing(3),
  },
}));

const Welcome = () => {
  const classes = useStyles();
  const googleMapUrl =
    "https://www.google.com/maps/embed/v1/place?q=Meyerson+Hall,+Philadelphia,+PA,+United+States&key=" +
    process.env.REACT_APP_GOOGLE_MAPS_KEY;

  return (
    <React.Fragment>
      <BackgroundImage imageURL={welcomeURL}>
        <Center className={classes.titleContainer}>
          <Typography className={classes.title} variant="h2">
            Welcome
          </Typography>
        </Center>
      </BackgroundImage>
      <Container className={classes.container} maxWidth="lg">
        <Typography className={classes.body} variant="body1">
          Welcome to <b>Grace Covenant Church (GCC)</b>! During your time with
          us, we hope you’ll be able to catch a glimpse of how God is faithfully
          moving in Philadelphia.
        </Typography>
        <div className={classes.media}>
          <iframe
            width="100%"
            height="100%"
            title="Grace Covenant Church Intro Video"
            src="https://www.youtube.com/embed/L8pMq-z8U80"
            frameBorder="0"
            allowFullScreen="true"
          />
        </div>
        <Typography className={classes.body} variant="body1">
          Our doors are wide open to people from all backgrounds. Whether you
          are a spiritual seeker who’s just beginning to ask questions about God
          or a committed Christian who wants to deepen one’s faith, GCC is a
          welcoming community that you can call family and find spiritual help,
          hope, and encouragement from. We invite you to discover God’s
          wonderful love and plan for your life through our church!
        </Typography>
        <Typography className={classes.subtitle} variant="h5">
          What makes us unique?
        </Typography>
        <Typography className={classes.body} variant="body1">
          It isn’t our <b>beliefs</b>. We affirm the same basic Christian
          doctrines that have been a part of the Church for hundreds of years.
          Rather, we are committed to presenting these truths in a practical,
          relevant, contemporary, and loving manner. Our desire is to introduce
          you to Jesus Christ and to help you grow and become a kingdom worker.
        </Typography>
        <Typography className={classes.subtitle} variant="h5">
          How can you get involved?
        </Typography>
        <Typography className={classes.body} variant="body1">
          Our church is comprised of a network of family groups: small, intimate
          groups in which honest friendships, Bible study, prayer, and
          compassionate care for one another are emphasized. Our family groups
          are where the core of our evangelism and discipleship takes place. We
          invite you to join one and be able to call GCC your home!
        </Typography>
        <Typography className={classes.body} variant="body1">
          Our Sunday service is typically located at Meyerson Hall, Room B1 (210
          South 34th Street).
        </Typography>
        <AspectRatio className={classes.map} ratio={4 / 3}>
          <iframe
            frameBorder="0"
            title="Meyerson Hall"
            src={googleMapUrl}
            style={{ width: "100%", height: "100%" }}
          />
        </AspectRatio>
        <Typography
          className={clsx(classes.body, classes.afterMap)}
          variant="body1"
        >
          If you would like more information about GCC, please continue to
          explore this website or feel free contact us at{" "}
          <Link to="mailto:web@gracecovenant.net">web@gracecovenant.net</Link>.
          Stay connected through our{" "}
          <Link to="https://www.facebook.com/gccphiladelphia/">Facebook</Link>{" "}
          and{" "}
          <Link to="https://www.instagram.com/gccphiladelphia/">Instagram</Link>
          , too!
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Welcome;
