import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ToDoListHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
        )
    }
};
