import React from "react";
import "./__mocks__/matchMedia";
import { Context as ResponsiveContext } from "react-responsive";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("matches the snapshot", () => {
    const { container: mobile } = render(
      <ResponsiveContext.Provider value={{ width: 300 }}>
        <App />
      </ResponsiveContext.Provider>
    );
    expect(mobile).toMatchSnapshot();

    const { container: desktop } = render(
      <ResponsiveContext.Provider value={{ width: 1000 }}>
        <App />
      </ResponsiveContext.Provider>
    );
    expect(desktop).toMatchSnapshot();
  });
});
