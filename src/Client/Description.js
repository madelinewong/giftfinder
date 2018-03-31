import React, { Component } from 'react';
import './Description.css';

const Description = props => (
            <div>
                Let's begin! How would you describe the person you're shopping for? (please only pick three don't be greedy)
                <p>
                </p>
                <button onClick={() => props.changePlace('priceRange')}> That's them!</button>
            </div>
        )

export default Description;