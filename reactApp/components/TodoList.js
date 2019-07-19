import React, { Component } from 'react';
import ToDo from './Todo'
import '../style.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ul>
                {this.props.todos.map((task) => (
                    <ToDo key={task.taskText} task={task} />
                ))}
            </ul>
        );
    }
}
 
export default TodoList;