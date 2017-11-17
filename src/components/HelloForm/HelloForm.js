import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HelloSayer from './HelloSayer';

export default class ComponentA extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'world'
        }
    }
    handleChange(e){
        console.log(e);
        this.setState({
            name: e.target.value
        });
        console.log(this.state.name);
    }
    render(){
        return (
            <div className="hello-form">
                <input type="text" onChange={e => this.handleChange(e)}/>
                <HelloSayer name={this.state.name} />
            </div>
        )
    }
}

