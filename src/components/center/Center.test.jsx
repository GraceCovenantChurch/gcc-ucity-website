import React from "react";
import renderer from "react-test-renderer";
import Center from "./Center";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Center>
        {" "}
        <div />{" "}
      </Center>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
