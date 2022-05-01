import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Team from "./Team";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      <App />
    </Switch>
  </Router>,
  document.getElementById("root")
);
