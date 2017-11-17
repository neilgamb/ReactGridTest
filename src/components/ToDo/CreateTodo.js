import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CreateToDo extends Component {
    handleCreate(e) {
        e.preventDefault();
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }
    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input
                    type="text"
                    placeholder="What Do I Need To Do?"
                    ref="createInput" />
                <button>Create</button>
            </form>
        )
    }
};

