import React, { Component } from 'react';
import ToDo from './Todo'
import '../style.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <ul>
                {this.props.todos.map((task) => (
                    <ToDo 
                        key={task._id} task={task} 
                        xClick={() => this.props.todoXClick(task._id)} 
                        toggleClick={() => this.props.toggle(task._id)}
                    />
                ))}
            </ul>
        );
    }
}
 
export default TodoList;