import React, { Component } from 'react';
import './GettingStarted.css'

const GettingStarted = props => (
            <div className="gettingStartedContainer">
                <h1>Click the Getting Started button to start the process! </h1>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nostrum laboriosam ullam optio commodi eligendi ex cupiditate quasi vel aperiam quae dicta error quis, fugiat veniam tempore. Explicabo, tempora dolores.</p>
                <button className="button1" onClick={() => props.changePlace('description')}>Get Started!</button>
            </div>
        )
export default GettingStarted;