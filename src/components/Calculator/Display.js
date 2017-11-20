import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Display extends Component {
    handleChange(e) {
        console.log(this.refs.createInput.value);
    }
    render() {
        return (
            <p className="current-num-display">{this.props.currentNum}</p>
        )
    }
};