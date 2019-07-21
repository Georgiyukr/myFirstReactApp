const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js');

router.post('/add', (req, res) => {

    console.log("This is the response", req.body);
    const testTodo = new TodoItem({
        task: req.body.taskText
    });
    
    testTodo.save()
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error);
    })
})

module.exports = router;