import React from "react";

import BackgroundImage from "components/background/BackgroundImage";
import TopHomeContent from "./TopHomeContent";
import FamilyGroupContent from "./FamilyGroupContent";
import Services from "./Services";

import homeUrl from "static/images/home/worship.jpg";
import familyGroupUrl from "static/images/home/familygroup.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <BackgroundImage imageURL={homeUrl}>
        <TopHomeContent />
      </BackgroundImage>
      <Services />
      <BackgroundImage imageURL={familyGroupUrl}>
        <FamilyGroupContent />
      </BackgroundImage>
    </React.Fragment>
  );
};

export default Home;
