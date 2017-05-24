import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../../scss/main.scss";

class Names extends Component {
    render() {
        return (
            <div className="container">
                <h1>Names module</h1>
                Hey there
            </div>
        );
    }
}

ReactDOM.render(<Names />, document.getElementById('namesCont'));
