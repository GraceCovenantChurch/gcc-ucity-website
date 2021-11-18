import React from "react";
import "../../../../__mocks__/matchMedia";
import { Context as ResponsiveContext } from "react-responsive";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import MenuComponentFactory from "./MenuComponentFactory";

describe("MenuComponentFactory", () => {
  describe("Link", () => {
    const data = {
      title: "Family Groups",
      type: "link",
      children: "/familygroup",
    };

    test("matches the snapshot", () => {
      const { container: mobile } = render(
        <Router>
          <ResponsiveContext.Provider value={{ width: 300 }}>
            <MenuComponentFactory data={data} />
          </ResponsiveContext.Provider>
        </Router>
      );
      expect(mobile).toMatchSnapshot();

      const { container: desktop } = render(
        <Router>
          <ResponsiveContext.Provider value={{ width: 1000 }}>
            <MenuComponentFactory data={data} />
          </ResponsiveContext.Provider>
        </Router>
      );
      expect(desktop).toMatchSnapshot();
    });
  });

  describe("Dropdown", () => {
    const data = {
      title: "About",
      type: "dropdown",
      children: [{ title: "Welcome", type: "link", children: "/welcome" }],
    };

    test("matches the snapshot", () => {
      const { container: mobile } = render(
        <Router>
          <ResponsiveContext.Provider value={{ width: 300 }}>
            <MenuComponentFactory data={data} />
          </ResponsiveContext.Provider>
        </Router>
      );
      expect(mobile).toMatchSnapshot();

      const { container: desktop } = render(
        <Router>
          <ResponsiveContext.Provider value={{ width: 1000 }}>
            <MenuComponentFactory data={data} />
          </ResponsiveContext.Provider>
        </Router>
      );
      expect(desktop).toMatchSnapshot();
    });
  });
});
