import React from "react";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
require("dotenv").config();
React.useLayoutEffect = React.useEffect;

// import ReactDOM from "react-dom";

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

// ReactDOM.createPortal = jest.fn((element, node) => {
//   return element;
// });
