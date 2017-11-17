import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToDoListHeader from './ToDoListHeader';
import TodoListItem from './ToDoListItem';
import _ from 'lodash';

export default class ToDoList extends Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => <TodoListItem key={index}{...todo}{...props} />);
    }
    render() {
        return (
            <table>
                <ToDoListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
};

