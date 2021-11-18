import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Link from "components/link/Link";
import GenericContent from "components/content/GenericContent";
import Body from "components/content/text/Body";
import Subheading from "components/content/text/Subheading";

import welcomeURL from "static/images/welcome/welcome_background.jpg";

const useStyles = makeStyles((theme) => ({
  media: {
    margin: "30px auto",
    width: "560px",
    height: "315px",
    background: "gray",
  },
  map: {
    width: "75%",
    height: "75%",
  },
  afterMap: {
    paddingTop: theme.spacing(3),
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <GenericContent title="Welcome" imageURL={welcomeURL}>
        <Body>
          Welcome to <b>Grace Covenant Church (GCC)</b>! During your time with
          us, we hope you’ll be able to catch a glimpse of how God is faithfully
          moving in Philadelphia.
        </Body>
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
        <Body>
          Our doors are wide open to people from all backgrounds. Whether you
          are a spiritual seeker who’s just beginning to ask questions about God
          or a committed Christian who wants to deepen one’s faith, GCC is a
          welcoming community that you can call family and find spiritual help,
          hope, and encouragement from. We invite you to discover God’s
          wonderful love and plan for your life through our church!
        </Body>
        <Subheading>What makes us unique?</Subheading>
        <Body>
          It isn’t our <b>beliefs</b>. We affirm the same basic Christian
          doctrines that have been a part of the Church for hundreds of years.
          Rather, we are committed to presenting these truths in a practical,
          relevant, contemporary, and loving manner. Our desire is to introduce
          you to Jesus Christ and to help you grow and become a kingdom worker.
        </Body>
        <Subheading>How can you get involved?</Subheading>
        <Body>
          Our church is comprised of a network of family groups: small, intimate
          groups in which honest friendships, Bible study, prayer, and
          compassionate care for one another are emphasized. Our family groups
          are where the core of our evangelism and discipleship takes place. We
          invite you to join one and be able to call GCC your home!
        </Body>
        <Body className={classes.afterMap}>
          If you would like more information about GCC, please continue to
          explore this website or feel free contact us at{" "}
          <Link to="mailto:web@gracecovenant.net">web@gracecovenant.net</Link>.
          Stay connected through our{" "}
          <Link to="https://www.facebook.com/gccphiladelphia/">Facebook</Link>{" "}
          and{" "}
          <Link to="https://www.instagram.com/gccphiladelphia/">Instagram</Link>
          , too!
        </Body>
      </GenericContent>
    </React.Fragment>
  );
};

export default Welcome;
