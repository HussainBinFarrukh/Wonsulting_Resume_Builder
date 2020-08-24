import React, { Component } from 'react';
import logo from '../../assests/default.png';

class homepageComponent extends Component {
    render() {
        return (
            <div>
            <img src={logo} className="App-logo" alt="logo" />
    
            <h1>Welcome to Wonsulting!</h1>
    
    
            </div>
        );
    }
}

export default homepageComponent;