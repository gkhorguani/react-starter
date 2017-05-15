import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../scss/main.scss";

class Main extends Component {
    render() {
        return (
            <div className="container">
                <h1>Heading</h1>
                Hey Giorgi, bro..
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));
