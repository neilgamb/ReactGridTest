import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponentData from './components/GridLayout/ComponentData';
import SimpleList from './components/SimpleList/SimpleList';

class App extends Component {
    render() {
        return <ComponentData />
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));

ReactDOM.render(<SimpleList />, document.querySelector('.list-container'));