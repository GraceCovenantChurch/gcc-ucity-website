import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import GenericContent from "components/content/GenericContent";
import Body from "components/content/text/Body";
import FamilyGroupCard from "components/card/FamilyGroupCard";
import MobileFamilyGroupCard from "components/card/MobileFamilyGroupCard";

import { getFamilyGroupPage, massageFamilyGroupPage } from "modules/Contentful";

import { MOBILE_QUERY } from "constants/mobile";

import familygroupURL from "static/images/familygroup/fg_background.jpg";

const useStyles = makeStyles((theme) => ({
  media: {
    margin: "30px auto",
    height: "50vh",
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

const FamilyGroup = () => {
  const classes = useStyles();
  const mobile = useMediaQuery({ query: MOBILE_QUERY });
  const [data, setData] = useState(null);

  useEffect(() => {
    const updateData = async () => {
      let results = await getFamilyGroupPage();
      results = await massageFamilyGroupPage(results);
      setData(results);
    };

    updateData();
  }, []);

  return (
    <React.Fragment>
      <GenericContent title="Family Group" imageURL={familygroupURL}>
        <Body>
          At GCC we place a high emphasis on family groups because we believe
          that it is in these smaller settings that we are able to meet with
          God, building meaningful relationships, and develop biblical
          accountability. Family groups meet on a weekly basis at various
          places.
        </Body>
        <div className={classes.media}>
          <iframe
            width="100%"
            height="100%"
            title="Grace Covenant Church Intro Video"
            src="https://www.youtube.com/embed/rvXubANV7RA"
            frameBorder="0"
            allowFullScreen={true}
          />
        </div>
        <Body>
          Through Bible study, discussions, sharing, prayer, and hangouts, we
          learn together to live out the teachings of God’s Word in our daily
          lives. Join us!
        </Body>
        <Grid container spacing={3}>
          {data
            ? data.map((element, index) => {
                if (mobile) {
                  return (
                    <Grid key={index} item xs={12}>
                      <MobileFamilyGroupCard
                        title={element.title}
                        subtitle={element.subtitle}
                        description={element.description}
                        image={element.image}
                        link={element.link}
                      />
                    </Grid>
                  );
                } else {
                  return (
                    <Grid key={index} item xs={12}>
                      <FamilyGroupCard
                        title={element.title}
                        subtitle={element.subtitle}
                        description={element.description}
                        image={element.image}
                        link={element.link}
                      />
                    </Grid>
                  );
                }
              })
            : undefined}
        </Grid>
      </GenericContent>
    </React.Fragment>
  );
};

export default FamilyGroup;
