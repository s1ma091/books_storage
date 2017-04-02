var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://Dima:smart1991@ds137100.mlab.com:37100/mytasklist_dima', ['tasks']);

router.post('/tasks', function (req, res, next) {
    db.tasks.find({ login: req.body.login, password: req.body.password }, function (err, tasks) {
        if (err) {
            res.send(err);
        } else
            res.json(tasks);
    });
});
//Save Task
router.post('/task', function (req, res, next) {
    var task = req.body;
    if (!task.login || !(task.password + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});
module.exports = router;