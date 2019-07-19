import React, { Component } from 'react';
import '../style.css';

class ToDo extends Component {
    constructor(props) {
        super(props)
        // this.state = {  }
    }
    render() { 
        return (
            <li>
                {this.props.task.completed === false ? this.props.task.taskText : <strike>{this.props.task.taskText}</strike>}
                <button className='delete-btn' value='Delete'>x</button>
            </li>
        );
    }
}

export default ToDo;