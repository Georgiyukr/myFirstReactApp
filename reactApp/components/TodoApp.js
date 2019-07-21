import InputLine from './InputLine'
import TodoList from './TodoList'
import React, { Component } from 'react';
import '../style.css';
import axios from 'axios'
const dbUrl = "http://localhost:3000/db";

const dummyData= [{taskText: 'finish todo App', completed: false}, 
    {taskText: 'finish Double Messeger', completed: true}, 
    {taskText: 'Eat', completed: false}]


class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = { todos : [] }
    }

    toggleTodo(index) {
        dummyData[index].completed === false ? true : false;

        if (dummyData[index].completed) {
            dummyData[index].completed = false;
        } else {
            dummyData[index].completed = true;
        }
        console.log('I am in toggle');
        this.setState({todos: dummyData});
    }

    addTodo(task) {

        axios.post(dbUrl + '/add', {taskText: task, completed: false})
        .then(function (response) {
            this.setState({ todos: this.state.todos.concat(response.data)});
        })
        .catch(function (error) {
          console.log(error);
        });

        // dummyData.push({taskText: task, completed: false});
        // console.log(dummyData);
        // this.setState({todos: dummyData});
    };

    removeTodo(index) {
        dummyData.splice(index, 1);
        console.log(dummyData);
        this.setState({todos: dummyData});
    }

    componentDidMount() {
        this.setState({todos : dummyData});
        console.log(dummyData);
        this.setState({todos: dummyData});
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