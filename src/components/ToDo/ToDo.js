import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';
import CreateToDo from './CreateTodo';

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { todos }
    }
    createTask(task) {
        this.state.todos.push({
            task: task, // or just 'task' per new ES6 syntax
            isComplete: false
        })
        this.setState({ todos: this.state.todos });
    }
    deleteTask(deletedTask) {
        const foundTodo = _.remove(this.state.todos, todo => todo.task === deletedTask);
        this.setState({ todos: this.state.todos });
    }
    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }
    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isComplete = !foundTodo.isComplete;
        this.setState({ todos: this.state.todos });
    }
    render() {
        return (
            <div>
                <CreateToDo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                <ToDoList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)} />
            </div>
        )
    }
};

const todos = [
    {
        task: 'Learn React',
        isComplete: false
    },
    {
        task: 'Make Cool Apps',
        isComplete: false
    },
    {
        task: 'Drink Beer',
        isComplete: true
    },
    {
        task: 'Sleep',
        isComplete: false
    },
]