// import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './style.css';

const dummyData= ['finish todo App', 'finish Double Messeger', 'Eat']


class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    

    render() { 
        return (
           
            <li>{this.props.task}<button className='delete-btn' value='Delete'>x</button></li>
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
                {dummyData.map((task) => (
                    <ToDo key={task} task={task} />
                ))}
            </ul>
        );
    }
}

// class InputLine extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (  );
//     }
// }

// class TodoApp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (  );
//     }
// }
 
// export default TodoApp;
 
// export default InputLine;
 
// export default TodoList;
 
// export default ToDo;
ReactDOM.render(<TodoList />, document.getElementById('root'));
