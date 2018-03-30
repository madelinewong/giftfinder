import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";

import GettingStarted from './Client/GettingStarted';
import Description from './Client/Description';
import PriceRange from './Client/PriceRange';
import Results from './Client/Results';

class App extends Component {
  constructor(){
    super();
    this.state = {
      location: "getting-started"
    };
    this.changePlace = this.changePlace.bind(this);  }
  changePlace(newLocation){
    this.setState({
      location: newLocation
    });
  }
  render() {
    if (this.state.location === "getting-started") {
      return (
        <div> <GettingStarted changePlace={this.changePlace} /> </div>
      )
    }
    if (this.state.location === "description") {
      return ( 
        <div> <Description changePlace = {this.changePlace} /> </div>
      )
    }
    if (this.state.location === "priceRange") {
      return (
        <div> <PriceRange changePlace = {this.changePlace} /> </div>
      )
    }
    if (this.state.location === "Results") {
      return (
        <div> <Results changePlace = {this.changePlace} /> </div>
      )
    }
  }
}

export default App;
