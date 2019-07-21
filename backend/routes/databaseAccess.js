const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js');

router.post('/add', (req, res) => {

    console.log("This is the response", req.body);
    const testTodo = new TodoItem({
        task: req.body.task
    });
    
    testTodo.save()
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error);
    })
})

router.get('/all', (req, res) => {
    TodoItem.find({}, function(err, item) {
        if (err) {
            console.log('FAILED in router GET /all', err);
            res.send(err);
        } else {
            res.send(item);
        }
    })
});



router.post('/remove', (req, res) => {
    TodoItem.findByIdAndRemove(req.body._id, function(err) {
        if (err) {
            console.log('FAILED in router POST /all', err);
            //res.send(err);
        } else {
            res.send('REMOVED');
        }
    })
});

router.post('/toggle', (req, res) => {
    TodoItem.findById(req.body._id, function(err, item) {
        if (err) {
            console.log('FAILED in router POST /', err);
            //res.send(err);
        } else {
            if (item.completed) {
                item.completed = false;
            } else {
                item.completed = true;
            }

            item.save().then(response => {
                res.send(response);
            })
            .catch(error => {
                res.send(error);
            })
        }
    })
});

module.exports = router;