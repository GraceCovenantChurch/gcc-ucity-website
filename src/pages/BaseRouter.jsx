import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home/Home";

const BaseRouter = () => (
  <Router>
    <header>
    </header>
    <Route exact path="/" component={Home} />
  </Router>
);

export default BaseRouter;
