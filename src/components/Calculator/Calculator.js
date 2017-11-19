import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputBox from './InputBox';
import CalculatorButtons from './CalculatorButtons';

export default class Calculator extends Component {
    render() {
        return (
            <div className="calculator-body">
                <InputBox />
                <CalculatorButtons />
            </div>
        )
    }
};
