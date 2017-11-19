import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CalculatorButtons extends Component {
    render() {
        return (
            <div className="button-section">
                <table>
                    <tbody>
                        <tr>
                            <td><button>7</button></td>
                            <td><button>8</button></td>
                            <td><button>9</button></td>
                            <td><button>+</button></td>
                        </tr>
                        <tr>
                            <td><button>4</button></td>
                            <td><button>5</button></td>
                            <td><button>6</button></td>
                            <td><button>-</button></td>
                        </tr>
                        <tr>
                            <td><button>1</button></td>
                            <td><button>2</button></td>
                            <td><button>3</button></td>
                            <td><button>x</button></td>
                        </tr> 
                        <tr>
                            <td><button>.</button></td>
                            <td><button>0</button></td>
                            <td><button>=</button></td>
                            <td><button>/</button></td>
                        </tr>                  
                    </tbody>
                </table>
            </div>
        )
    }
};