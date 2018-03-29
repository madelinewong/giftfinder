import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";

import GettingStarted from './GettingStarted';
import Description from './Description';
import PriceRange from './PriceRange';
import Results from './Results';

class App extends Component {
  constructor(){
    super();
    this.state = {
      location: "getting-started",
      location: "description"
    }
    this.changePlace = this.changePlace.bind(this);
    this.isClicked = this.isClicked.bind(this);
  }
  changePlace(e){
    console.log("changing place");
  }
  isClicked(e){
    console.log("clicked");
  }
  render() {
    if (this.state.location === "getting-started") {
      return (
        <div> <GettingStarted changePlace = {this.changePlace} /> </div>
      )
    }
    if (this.isClicked === "description") {
      return ( 
        <div> <Description changePlace = {this.changePlace} /> </div>
      )
    }
    return (
      <div> 
        <Description />
      </div>
    );
  }
}

export default App;
