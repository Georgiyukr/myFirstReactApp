
import React, { Component } from 'react';
import '../style.css';

class InputLine extends Component {
    constructor(props) {
        super(props);
        // this.state = {  }
    }
    render() { 
        return ( 
            <div className="todo-form">
                <input type="text" className="todo-input" name="add-todo" value="write-todo" placeholder="task"/>
                <input onClick={() => this.props.submit("Test Task")} type="submit" className="todo-submit" name="submit-todo" value="add-todo"/>
            </div>
         );
    }
}


 

 
export default InputLine;