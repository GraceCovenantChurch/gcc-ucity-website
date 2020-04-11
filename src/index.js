import React from "react";
import ReactDOM, { BrowserRouter } from "react-dom";
import "./styles/global.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
