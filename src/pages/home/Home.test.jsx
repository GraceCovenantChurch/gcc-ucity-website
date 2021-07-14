import React from "react";
import "__mocks__/matchMedia";
import { Context as ResponsiveContext } from "react-responsive";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

describe("Home", () => {
  test("matches the snapshot", () => {
    const { container: mobile } = render(
      <Router>
        <ResponsiveContext.Provider value={{ width: 300 }}>
          <Home />
        </ResponsiveContext.Provider>
      </Router>
    );
    expect(mobile).toMatchSnapshot();

    const { container: desktop } = render(
      <Router>
        <ResponsiveContext.Provider value={{ width: 1000 }}>
          <Home />
        </ResponsiveContext.Provider>
      </Router>
    );
    expect(desktop).toMatchSnapshot();
  });
});
