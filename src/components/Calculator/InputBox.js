import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class InputBox extends Component {
    handleChange(e){
        console.log(this.refs.createInput.value);
    }
    render() {
        return (
            <form onChange={this.handleChange.bind(this)}>
            <input
                placeholder={this.props.currentNum}
                type="text"
                ref="createInput" />
            </form>
        )
    }
};