import React from "react";
import "../../../../__mocks__/matchMedia";
import { Context as ResponsiveContext } from "react-responsive";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import DrawerLinks from "./DrawerLinks";

const menuOptions = [
  {
    title: "About",
    type: "dropdown",
    children: [{ title: "Welcome", type: "link", children: "/welcome" }],
  },
  { title: "Family Groups", type: "link", children: "/familygroup" },
];

const toggleDrawer = jest.fn();

describe("DrawerLinks", () => {
  test("matches the snapshot", () => {
    const { container: mobile } = render(
      <Router>
        <ResponsiveContext.Provider value={{ width: 300 }}>
          <DrawerLinks
            toggleDrawer={(flag) => toggleDrawer(flag)}
            data={menuOptions}
          />
        </ResponsiveContext.Provider>
      </Router>
    );
    expect(mobile).toMatchSnapshot();

    const { container: desktop } = render(
      <Router>
        <ResponsiveContext.Provider value={{ width: 1000 }}>
          <DrawerLinks
            toggleDrawer={(flag) => toggleDrawer(flag)}
            data={menuOptions}
          />
        </ResponsiveContext.Provider>
      </Router>
    );
    expect(desktop).toMatchSnapshot();
  });
});
