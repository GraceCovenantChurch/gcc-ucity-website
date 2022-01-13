import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "components/navigation/Navigation";
import Footer from "components/footer/Footer";
import ScrollToTop from "components/scroll/ScrollToTop";

import Home from "./home/Home";
import NotFound from "./notfound/NotFound";
import Welcome from "./welcome/Welcome";
import Beliefs from "./beliefs/Beliefs";
// import Page from "./page/Page";
// import AsyncPage from "./asyncPage/AsyncPage";
import FamilyGroup from "./familygroup/FamilyGroup";
import Ministries from "./ministries/Ministries";
import Staff from "./staff/Staff";
import Giving from "./giving/Giving";

import Events from "./events/Events";
import Multimedia from "./multimedia/Multimedia";
// import Sermons from "./sermons/Sermons";

const BaseRouter = (props) => (
  <React.Fragment>
    <ScrollToTop />
    <Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/beliefs" element={<Beliefs />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/familygroup" element={<FamilyGroup />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/events" element={<Events />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/*
    <Route path="/page" element={Page} />
    <Route path="/asyncPage" element={AsyncPage} />
    <Route path="/sermons" element={Sermons} /> */}
      <Footer />
    </Navigation>
  </React.Fragment>
);

export default BaseRouter;
