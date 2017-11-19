import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputBox from './InputBox';
import CalculatorButtons from './CalculatorButtons';

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentNum: null,
        }
    }
    handleNumClick(num){
        console.log(num);
        this.setState({ currentNum: num })
    }
    render() {
        return (
            <div className="calculator-body">
                <InputBox currentNum={this.state.currentNum}/>
                <CalculatorButtons handleNumClick={this.handleNumClick.bind(this)} />
            </div>
        )
    }
};
