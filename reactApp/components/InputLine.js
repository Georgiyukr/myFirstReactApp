
import React, { Component } from 'react';
import '../style.css';

class InputLine extends Component {
    constructor(props) {
        super(props);
        this.state = { typedText : '' }
    }

    handleTyping(event) {
        this.setState({typedText: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submit(this.state.typedText);
        this.setState({typedText: ''})
    }

    render() { 
        return ( 
            <div className="todo-form">
                <input onChange={(event) => this.handleTyping(event)} 
                    type="text" className="todo-input" name="add-todo" value={this.state.typedText} 
                    placeholder=" What is your task?"/>
                <input onClick={() => this.handleSubmit(event)} type="submit" 
                    className="todo-submit" name="submit-todo" 
                    value="add-todo"/>
            </div>
         );
    }
}


 

 
export default InputLine;