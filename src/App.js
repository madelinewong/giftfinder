import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";

import GettingStarted from './GettingStarted';
import Description from './Description';
import PriceRange from './PriceRange';
import Results from './Results';

class App extends Component {
  render() {
    return (
      <div> 
        <GettingStarted />
      </div>
    );
  }
}

export default App;
