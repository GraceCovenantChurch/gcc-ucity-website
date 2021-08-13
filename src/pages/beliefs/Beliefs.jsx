import React from "react";
import { useMediaQuery } from "react-responsive";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import GenericContent from "components/content/GenericContent";
import Body from "components/content/text/Body";
import Subheading from "components/content/text/Subheading";
import CenteredContentWithGrid from "components/content/CenteredContentWithGrid";
import BeliefsCard from "components/card/BeliefsCard";
import MobileBeliefsCard from "components/card/MobileBeliefsCard";

import { getBeliefs, massageBeliefs } from "modules/Contentful";

import { VISION_STATEMENT, FIVE_CORE_VALUES } from "constants/beliefs";
import { MOBILE_QUERY } from "constants/mobile";

import beliefsURL from "static/images/beliefs/beliefs_background.jpg";

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "center",
  },
}));

const Beliefs = () => {
  const classes = useStyles();
  const mobile = useMediaQuery({ query: MOBILE_QUERY });

  return (
    <React.Fragment>
      <GenericContent cards title="Beliefs" imageURL={beliefsURL}>
        <Subheading className={classes.center}>Our Vision</Subheading>
        <Body className={classes.center}>{VISION_STATEMENT}</Body>
        <Subheading className={classes.center}>Five Core Values</Subheading>

        <List>
          <Body className={classes.center}>
            {FIVE_CORE_VALUES.map((value, index) => {
              return (
                <React.Fragment key={index}>
                  {value}
                  <br />
                </React.Fragment>
              );
            })}
          </Body>
        </List>
        <CenteredContentWithGrid
          upperTitle
          isMobile={mobile}
          title={"What we believe in"}
          fetchCall={[getBeliefs]}
          massage={massageBeliefs}
          component={mobile ? MobileBeliefsCard : BeliefsCard}
        ></CenteredContentWithGrid>
      </GenericContent>
    </React.Fragment>
  );
};

export default Beliefs;
