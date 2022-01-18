import React from "react";
import "./__mocks__/matchMedia";
import { Context as ResponsiveContext } from "react-responsive";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("matches the snapshot", () => {
    const { container: mobile } = render(<App />);
    expect(mobile).toMatchSnapshot();

    const { container: desktop } = render(<App />);
    expect(desktop).toMatchSnapshot();
  });
});
