import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class HelloSayer extends Component {
    render() {
        return (
            <div className="output">
                <p>Hello {this.props.name}!</p>
            </div>
        );
    }
}

