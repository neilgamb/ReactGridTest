import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import CalculatorButtons from './CalculatorButtons';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNum: 0,
        }
    }
    handleNumClick(num) {
        console.log(num);
        this.setState({ currentNum: num })
    }
    render() {
        return (
            <div className="calculator-body">
                <Display currentNum={this.state.currentNum} />
                <CalculatorButtons handleNumClick={this.handleNumClick.bind(this)} />
            </div>
        )
    }
};
