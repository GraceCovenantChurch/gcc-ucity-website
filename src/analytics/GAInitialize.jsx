import React from "react";
import ReactGA from "react-ga";

import RouteChangeTracker from "./RouteChangeTracker";

const GAInitialize = () => {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);

  return (
    <React.Fragment>
      <RouteChangeTracker />
    </React.Fragment>
  );
};

export default GAInitialize;
