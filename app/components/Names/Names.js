import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../../scss/main.scss";

import NameRow from './NameRow'

class Names extends Component {
    render() {
        return (
            <div className="container">
                <h1>Names module</h1>
                Hey there
                <NameRow id="1" name="Test name" />
            </div>
        );
    }
}

ReactDOM.render(<Names />, document.getElementById('namesCont'));
