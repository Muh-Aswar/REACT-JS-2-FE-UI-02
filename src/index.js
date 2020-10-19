import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Form from "./component/Form/Form";
import "./component/Form/Form.css";

import NavBar from "./component/NavBar/NavBar";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    {/* <App /> */}

    <Form />
  </React.StrictMode>,
  rootElement
);
