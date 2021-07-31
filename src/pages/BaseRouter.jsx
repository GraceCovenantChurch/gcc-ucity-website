import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "components/navigation/Navigation";
import Footer from "components/footer/Footer";

import Home from "./home/Home";
import Welcome from "./welcome/Welcome";
import Beliefs from "./beliefs/Beliefs";
// import Page from "./page/Page";
// import AsyncPage from "./asyncPage/AsyncPage";
import FamilyGroup from "./familygroup/FamilyGroup";
import Ministries from "./ministries/Ministries";
import Staff from "./staff/Staff";
import Giving from "./giving/Giving";

// import Events from "./events/Events";
// import Multimedia from "./multimedia/Multimedia";
// import Sermons from "./sermons/Sermons";

const BaseRouter = (props) => (
  <Router>
    <Navigation>
      <Route exact path="/" component={Home} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/beliefs" component={Beliefs} />
      <Route path="/staff" component={Staff} />
      <Route path="/familygroup" component={FamilyGroup} />
      <Route path="/ministries" component={Ministries} />
      <Route path="/giving" component={Giving} />
      {/*
    <Route path="/page" component={Page} />
    <Route path="/asyncPage" component={AsyncPage} />
    <Route path="/events" component={Events} />
    <Route path="/multimedia" component={Multimedia} />
    <Route path="/sermons" component={Sermons} /> */}
      <Footer />
    </Navigation>
  </Router>
);

export default BaseRouter;
