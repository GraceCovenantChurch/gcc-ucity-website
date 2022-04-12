import React from "react";
import { useMediaQuery } from "react-responsive";
import Scroll from "react-scroll";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import ContentWithImage from "components/content/ContentWithImage";
import ContentWithImageAPI from "components/content/ContentWithImageAPI";
import CenteredContentWithGrid from "components/content/CenteredContentWithGrid";
import ConditionalAppURL from "components/mobileapp/ConditionalAppURL";
import MemoryVerseContent from "./content/MemoryVerseContent";
import EventsCard from "components/card/EventsCard";
import MobileEventsCard from "components/card/MobileEventsCard";
import ServicesCard from "components/card/ServicesCard";

import {
  getHomeEvents,
  massageEvents,
  // getCollegeFridayServices,
  // getSundayServices,
  // getCrossroadFridayServices,
  // massageServices,
  getReadingContent,
  massageReadingContent,
  getEasterServices,
  massageEasterServices,
} from "modules/Contentful";

import homeUrl from "static/images/home/worship.jpg";
import familyGroupUrl from "static/images/home/familygroup.jpg";
import amiQTUrl from "static/images/home/amiqt.jpg";
import { MOBILE_QUERY } from "constants/mobile";
import { HOME_DEFAULT } from "constants/home";

const Element = Scroll.Element;

const useStyles = makeStyles((theme) => ({
  eventsPadding: {
    padding: theme.spacing(2),
  },
}));

const Home = () => {
  const mobile = useMediaQuery({ query: MOBILE_QUERY });
  const classes = useStyles();
  const top = HOME_DEFAULT.top;
  const service = HOME_DEFAULT.service;
  const familygroup = HOME_DEFAULT.familygroup;
  const events = HOME_DEFAULT.events;
  const reading = HOME_DEFAULT.reading;

  return (
    <React.Fragment>
      <ContentWithImage
        isMobile={mobile}
        imageURL={homeUrl}
        title={top.vision}
        link={top.link}
      />
      <Element
        name={service.elementName}
        className={service.elementName}
        id={service.elementID}
      >
        {/* <CenteredContentWithGrid
          upperTitle
          isMobile={mobile}
          title={service.title}
          elementName={service.elementName}
          elementID={service.elementID}
          fetchCall={[
            getCollegeFridayServices,
            getSundayServices,
            getCrossroadFridayServices,
          ]}
          massage={massageServices}
          component={ServicesCard}
        /> */}
        <CenteredContentWithGrid
          upperTitle
          isMobile={mobile}
          title={"EASTER SERVICE LOCATION AND TIMES"}
          elementName={service.elementName}
          elementID={service.elementID}
          fetchCall={[getEasterServices]}
          massage={massageEasterServices}
          component={ServicesCard}
        />
      </Element>
      <ContentWithImage
        isMobile={mobile}
        imageURL={familyGroupUrl}
        title={familygroup.title}
        description={familygroup.description}
        link={familygroup.link}
      />
      <Container className={mobile ? classes.eventsMobilePadding : undefined}>
        <CenteredContentWithGrid
          upperTitle
          isMobile={mobile}
          title={events.title}
          fetchCall={[getHomeEvents]}
          massage={massageEvents}
          component={mobile ? MobileEventsCard : EventsCard}
          link={events.link}
        />
      </Container>
      <ContentWithImageAPI
        isMobile={mobile}
        title={reading.title}
        imageURL={amiQTUrl}
        fetchCall={[getReadingContent]}
        defaultDescription={ConditionalAppURL}
        massage={massageReadingContent}
        component={EventsCard}
        link={events.link}
      />
      <MemoryVerseContent isMobile={mobile} />
    </React.Fragment>
  );
};

export default Home;
