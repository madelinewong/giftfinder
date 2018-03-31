import React, { Component } from 'react';

const PriceRange = props => (
            <div>
                What's the price you're willing to spend?
                <p></p>
                <button onClick={() => props.changePlace('Results')}> That's it!</button>
            </div>
        );

export default PriceRange;