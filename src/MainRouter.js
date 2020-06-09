import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Drinks from "./components/Drinks/Drinks";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

export default class MainRouter extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/drinks" component={Drinks} />
          <Route exact path="/restaurants" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route
            render={() => {
              return <h1>Not Found</h1>;
            }}
          />
        </Switch>
      </div>
    );
  }
}
