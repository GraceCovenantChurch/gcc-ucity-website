import React from "react";

import ThemeConfig from "theme/ThemeConfig";
import BaseRouter from "pages/BaseRouter";

import NavigationBar from "components/NavigationBar";

import GAInitialize from "analytics/GAInitialize";

const App = () => {
  return (
    <ThemeConfig>
      <GAInitialize />
      <NavigationBar />
      <BaseRouter />
    </ThemeConfig>
  );
};

export default App;
