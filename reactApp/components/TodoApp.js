import InputLine from './InputLine'
import TodoList from './TodoList'
import React, { Component } from 'react';
import '../style.css';

const dummyData= [{taskText: 'finish todo App', completed: false}, 
    {taskText: 'finish Double Messeger', completed: true}, 
    {taskText: 'Eat', completed: false}]


class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = { todos : [] }
    }

    addTodo(task) {
        dummyData.push({taskText: 'Test Task', completed: false});
        console.log(dummyData);
        this.setState({todos: dummyData});
    };

    componentDidMount() {
        this.setState({todos : dummyData})
    }
    render() { 
        return ( 
            <div>
                <InputLine submit={this.addTodo.bind(this)}/>
                <TodoList todos={this.state.todos}/>
            </div>

        );
    }
}

export default TodoApp;