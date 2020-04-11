import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home/Home";
import Beliefs from "./beliefs/Beliefs";
import Page from "./page/Page";
import AsyncPage from "./asyncPage/AsyncPage";
import FamilyGroup from "./familyGroup/FamilyGroup";
import Ministries from "./ministries/Ministries";
import Staff from "./staff/Staff";
import Welcome from "./welcome/Welcome";
import Events from "./events/Events";
import Multimedia from "./multimedia/Multimedia";
import Giving from "./giving/Giving";
import Sermons from "./sermons/Sermons";

const BaseRouter = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/beliefs" component={Beliefs} />
    <Route path="/page" component={Page} />
    <Route path="/asyncPage" component={AsyncPage} />
    <Route path="/familyGroup" component={FamilyGroup} />
    <Route path="/ministries" component={Ministries} />
    <Route path="/staff" component={Staff} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/events" component={Events} />
    <Route path="/multimedia" component={Multimedia} />
    <Route path="/giving" component={Giving} />
    <Route path="/sermons" component={Sermons} />
  </Router>
);

export default BaseRouter;
