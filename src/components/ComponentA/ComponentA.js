import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ComponentA extends Component {
    render() {
        return (<p>Hello {this.props.name}!</p>);
    }
}

