import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import CalculatorButtons from './CalculatorButtons';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFirstNum: '',
            firstEntered: false,
            currentSecondNum: null,
            secondEntered: false,
            currentOp: '',
            result: '',
        }
    }
    handleNumClick(num) {
        let firstNum = this.state.currentFirstNum;
        let secondNum;
        if(!this.state.firstEntered){
            firstNum = firstNum.toString().concat(num.toString());
            this.setState({ currentFirstNum: firstNum });
            console.log(firstNum);
        } 
        // this.setState({ currentNum: result })
    }
    handlePlusClick(){
        this.setState({
            currentOp: "sum"
        })
    }
    handleMinusClick(num){

    }
    handleMultClick(num){

    }
    handleDivClick(num){

    }
    render() {
        return (
            <div className="calculator-body">
                <Display currentNum={this.state.currentFirstNum} />
                <CalculatorButtons 
                handleNumClick={this.handleNumClick.bind(this)}
                handlePlusClick={this.handlePlusClick.bind(this)}
                handleMinusClick={this.handleMinusClick.bind(this)}
                handleMultClick={this.handleMultClick.bind(this)}
                handleDivClick={this.handleDivClick.bind(this)} />
            </div>
        )
    }
};
