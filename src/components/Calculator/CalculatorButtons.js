import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CalculatorButtons extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
        // console.log(this);
    }
    onNumClick(e) {
        const selectedNum = parseInt(e.target.id);
        this.props.handleNumClick(selectedNum);
    }
    render() {
        return (
            <div className="button-section">
                <table>
                    <tbody>
                        <tr>
                            <td><button id='7' onClick={this.onNumClick.bind(this)}>7</button></td>
                            <td><button id='8' onClick={this.onNumClick.bind(this)}>8</button></td>
                            <td><button id='9' onClick={this.onNumClick.bind(this)}>9</button></td>
                            <td><button id='+' onClick={this.props.handlePlusClick.bind(this)}>+</button></td>
                        </tr>
                        <tr>
                            <td><button id='4' onClick={this.onNumClick.bind(this)}>4</button></td>
                            <td><button id='5' onClick={this.onNumClick.bind(this)}>5</button></td>
                            <td><button id='6' onClick={this.onNumClick.bind(this)}>6</button></td>
                            <td><button id='-' onClick={this.props.handleMinusClick.bind(this)}>-</button></td>
                        </tr>
                        <tr>
                            <td><button id='1' onClick={this.onNumClick.bind(this)}>1</button></td>
                            <td><button id='2' onClick={this.onNumClick.bind(this)}>2</button></td>
                            <td><button id='3' onClick={this.onNumClick.bind(this)}>3</button></td>
                            <td><button id='x' onClick={this.props.handleMultClick.bind(this)}>x</button></td>
                        </tr>
                        <tr>
                            <td><button id='.' onClick={this.onNumClick.bind(this)}>.</button></td>
                            <td><button id='0' onClick={this.onNumClick.bind(this)}>0</button></td>
                            <td><button id='=' onClick={this.onNumClick.bind(this)}>=</button></td>
                            <td><button id='/' onClick={this.props.handleDivClick.bind(this)}>/</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
};