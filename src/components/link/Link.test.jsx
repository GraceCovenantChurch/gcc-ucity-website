import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import Link from "./Link";

describe("Link", () => {
  it("renders correctly with internal", () => {
    const tree = renderer
      .create(
        <Router>
          <Link to="/home">
            <div />
          </Link>
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with external", () => {
    const tree = renderer
      .create(
        <Router>
          <Link to="https://www.google.com">
            <div />
          </Link>
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
