import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import MarkdownPage from "./MarkdownPage";
import "./index.css";

const router = (
  <Router>
    <Route basename="/">
      <Route path="/" component={App} exact />
      <Route path="/markdown" component={MarkdownPage} />
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById("root"));
