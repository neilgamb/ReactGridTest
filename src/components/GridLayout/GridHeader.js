import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class GridHeader extends Component {
    handleAdd() {
        this.props.onAddItem();
    }
    render() {
        return (
            <header className="grid-header">
                <button
                    onClick={this.handleAdd.bind(this)}
                    className="add-comp">Add Component
                </button>
                {/* <div className="add-comp">Add Component</div> */}
            </header>
        );
    }
};
