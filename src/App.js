import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";

import GettingStarted from "./Client/GettingStarted";
import Description from "./Client/Description";
import PriceRange from "./Client/PriceRange";
import Results from "./Client/Results";
import Layout from './Layout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: "getting-started"
    };
    this.changePlace = this.changePlace.bind(this);
  }
  changePlace(newLocation) {
    this.setState({
      location: newLocation
    });
  }
  render() {
    if (this.state.location === "getting-started") {
      return (
        <Layout>
          {" "}
          <GettingStarted changePlace={this.changePlace} />{" "}
        </Layout>
      );
    }
    if (this.state.location === "description") {
      return (
        <Layout>
          <Description changePlace={this.changePlace} />{" "}
        </Layout>
      );
    }
    if (this.state.location === "priceRange") {
      return (
        <Layout>
          <PriceRange changePlace={this.changePlace} />{" "}
        </Layout>
      );
    }
    if (this.state.location === "Results") {
      return (
        <Layout>
          <Results changePlace={this.changePlace} />{" "}
        </Layout>
      );
    }
  }
}

export default App;
