import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponentData from './components/GridLayout/ComponentData';

class App extends Component {
    render() {
        return <ComponentData />
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));