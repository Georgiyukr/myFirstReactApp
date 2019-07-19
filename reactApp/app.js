// import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './style.css';

const dummyData= [{taskText: 'finish todo App', completed: false}, 
    {taskText: 'finish Double Messeger', completed: true}, 
    {taskText: 'Eat', completed: false}]


class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
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

class InputLine extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="todo-form">
                <input type="text" className="todo-input" name="add-todo" value="write-todo" placeholder="task"/>
                <input type="submit" className="todo-submit" name="submit-todo" value="add-todo"/>
            </div>
         );
    }
}

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = { todos : [] }
    }

    componentDidMount() {
        this.setState({todos : dummyData})
    }
    render() { 
        return ( 
            <div>
                <InputLine />
                <TodoList todos={this.state.todos}/>
            </div>

        );
    }
}
 
// export default TodoApp;
 
// export default InputLine;
 
// export default TodoList;
 
// export default ToDo;
ReactDOM.render(<TodoApp />, document.getElementById('root'));
