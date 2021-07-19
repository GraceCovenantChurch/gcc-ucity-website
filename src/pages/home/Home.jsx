import React from "react";
import { useMediaQuery } from "react-responsive";

import BackgroundImage from "components/background/BackgroundImage";
import TopHomeContent from "./content/TopHomeContent";
import FamilyGroupContent from "./content/FamilyGroupContent";
import ServicesContent from "./content/ServicesContent";
import EventsContent from "./content/EventsContent";
import ReadingContent from "./content/ReadingContent";
import MemoryVerseContent from "./content/MemoryVerseContent";

import homeUrl from "static/images/home/worship.jpg";
import familyGroupUrl from "static/images/home/familygroup.jpg";
import amiQTUrl from "static/images/home/amiqt.jpg";

import { MOBILE_QUERY } from "constants/mobile";

/**
 * TODO: This would be a fun feature for someone to start off
 *   1. Content Component Model and abstration
 *   2. isMobile Abstraction
 */

const Home = () => {
  const mobile = useMediaQuery({ query: MOBILE_QUERY });

  return (
    <React.Fragment>
      <BackgroundImage imageURL={homeUrl}>
        <TopHomeContent isMobile={mobile} />
      </BackgroundImage>
      <ServicesContent isMobile={mobile} />
      <BackgroundImage imageURL={familyGroupUrl}>
        <FamilyGroupContent isMobile={mobile} />
      </BackgroundImage>
      <EventsContent isMobile={mobile} />
      <BackgroundImage imageURL={amiQTUrl}>
        <ReadingContent isMobile={mobile} />
      </BackgroundImage>
      <MemoryVerseContent isMobile={mobile} />
    </React.Fragment>
  );
};

export default Home;
