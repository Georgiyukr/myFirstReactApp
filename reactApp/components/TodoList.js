import React, { Component } from 'react';
import ToDo from './Todo'
import '../style.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        // this.state = {}
    }
    render() { 
        return ( 
            <ul>
                {this.props.todos.map((task, index) => (
                    <ToDo 
                        key={task.taskText} task={task} 
                        xClick={() => this.props.todoXClick(index)} 
                        toggleClick={() => this.props.toggle(index)}
                    />
                ))}
            </ul>
        );
    }
}
 
export default TodoList;