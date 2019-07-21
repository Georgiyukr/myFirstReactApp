import React, { Component } from 'react';
import '../style.css';

class ToDo extends Component {
    constructor(props) {
        super(props)
        // this.state = {  }
    }
    render() { 
        return (
            <li className="task">
                {this.props.task.completed === false ? this.props.task.task : <strike>{this.props.task.task}</strike>}
                <button onClick={() => this.props.toggleClick()} className='toggle-btn' value='Toggle'>Completed</button>
                <button onClick={() => this.props.xClick()} className='delete-btn' value='Delete'>X</button>
            </li>
        );
    }
}

export default ToDo;

