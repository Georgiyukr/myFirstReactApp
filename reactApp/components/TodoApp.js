import InputLine from './InputLine'
import TodoList from './TodoList'
import React, { Component } from 'react';
import '../style.css';
import axios from 'axios'
const dbUrl = "http://localhost:3000/db";

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = { todos : [] }
    }

    toggleTodo(id) {
        
        axios.post(dbUrl + '/toggle', {_id: id})
        .then(function (response) {
            let newTodos = this.state.todos.slice();
            for (let i in newTodos) {
                let task = newTodos[i];
                if (task._id === id) {
                    if (task.completed) {
                        console.log('TOGGLED in IF TRUE');
                        newTodos[i].completed = false;
                    } else {
                        console.log('TOGGLED in IF FALSE');
                        newTodos[i].completed = true;
                    }
                    //newTodos[i] = response.data;
                }
            }
            console.log('TOGGLED');
            this.setState({todos: newTodos});
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    }

    addTodo(task) {
        axios.post(dbUrl + '/add', {task: task, completed: false})
        .then(function (response) {
            this.setState({ todos: this.state.todos.concat(response.data)});
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    };

    removeTodo(id) {
        axios.post(dbUrl + '/remove', {_id, id}).then(function (response) {
            let newTodos = [];
            for (let i in newTodos) {
                let task = newTodos[i];
                if (task._id !== id) {
                    newTodos.push(task)
                }
            }
            this.setState({todos:newTodos});
        }.bind(this));
    }

    componentDidMount() {
        axios.get(dbUrl + '/all').then(function (response) {
            this.setState({todos: response.data});
        }.bind(this))
    }
    render() { 
        return ( 
            <div>
                <InputLine submit={this.addTodo.bind(this)} />
                <TodoList 
                    todos={this.state.todos} 
                    todoXClick={this.removeTodo.bind(this)} 
                    toggle = {this.toggleTodo.bind(this)}
                />
            </div>

        );
    }
}

export default TodoApp;