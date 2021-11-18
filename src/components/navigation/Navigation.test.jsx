import React from "react";
import { Context as ResponsiveContext } from "react-responsive";
import "../../__mocks__/matchMedia";
import { BrowserRouter as Router } from "react-router-dom";

import { render } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation", () => {
  test("matches the snapshot", () => {
    const { container: mobile } = render(
      <Router>
        <ResponsiveContext.Provider value={{ width: 300 }}>
          <Navigation />
        </ResponsiveContext.Provider>
      </Router>
    );
    expect(mobile).toMatchSnapshot();

    const { container: desktop } = render(
      <Router>
        <ResponsiveContext.Provider value={{ width: 1000 }}>
          <Navigation />
        </ResponsiveContext.Provider>
      </Router>
    );
    expect(desktop).toMatchSnapshot();
  });
});
