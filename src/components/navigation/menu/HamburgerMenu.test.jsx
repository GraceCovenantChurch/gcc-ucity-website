import React from "react";
import "../../../__mocks__/matchMedia";
import { Context as ResponsiveContext } from "react-responsive";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu";

const menuOptions = [
  {
    title: "About",
    type: "dropdown",
    children: [{ title: "Welcome", type: "link", children: "/welcome" }],
  },
  { title: "Family Groups", type: "link", children: "/familygroup" },
];

describe("HamburgerMenu", () => {
  test("matches the snapshot", () => {
    const { container: mobile } = render(
      <Router>
        <ResponsiveContext.Provider value={{ width: 300 }}>
          <HamburgerMenu menu={menuOptions} />
        </ResponsiveContext.Provider>
      </Router>
    );
    expect(mobile).toMatchSnapshot();

    const { container: desktop } = render(
      <Router>
        <ResponsiveContext.Provider value={{ width: 1000 }}>
          <HamburgerMenu menu={menuOptions} />
        </ResponsiveContext.Provider>
      </Router>
    );
    expect(desktop).toMatchSnapshot();
  });
});
