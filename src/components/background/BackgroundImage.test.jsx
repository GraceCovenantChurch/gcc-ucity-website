import React from "react";
import renderer from "react-test-renderer";
import BackgroundImage from "./BackgroundImage";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <BackgroundImage imageURL={"/something/someFilePath"}>
        {" "}
        <div />{" "}
      </BackgroundImage>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
