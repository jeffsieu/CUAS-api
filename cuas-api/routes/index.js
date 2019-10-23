'use strict';
var express = require('express');
var router = express.Router();
var TYPES = require('tedious').TYPES;

/* GET task listing. */
router.get('/customers', function (req, res) {

    req.sql("select * from InfoReporting for json path")
        .into(res, '[]');

});

module.exports = router;


/* GET single task. *//*
router.get('/:id', function (req, res) {

    req.sql("select * from todo where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');

});

*//* POST create task. *//*
router.post('/', function (req, res) {

    req.sql("exec createTodo @todo")
        .param('todo', req.body, TYPES.NVarChar)
        .exec(res);

});

*//* PUT update task. *//*
router.put('/:id', function (req, res) {

    req.sql("exec updateTodo @id, @todo")
        .param('id', req.params.id, TYPES.Int)
        .param('todo', req.body, TYPES.NVarChar)
        .exec(res);

});

*//* DELETE single task. *//*
router.delete('/:id', function (req, res) {

    req.sql("delete from todo where id = @id")
        .param('id', req.params.id, TYPES.Int)
        .exec(res);

});*/

/*//rest api to get all customers
app.get('/customer', function (req, res) {
    connection.query('select * from customer', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});
//rest api to get a single customer data
app.get('/customer/:id', function (req, res) {
    connection.query('select * from customers where Id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//rest api to create a new customer record into mysql database
app.post('/customer', function (req, res) {
    var params = req.body;
    console.log(params);
    connection.query('INSERT INTO customer SET ?', params, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//rest api to update record into mysql database
app.put('/customer', function (req, res) {
    connection.query('UPDATE `customer` SET `Name`=?,`Address`=?,`Country`=?,`Phone`=? where `Id`=?', [req.body.Name, req.body.Address, req.body.Country, req.body.Phone, req.body.Id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//rest api to delete record from mysql database
app.delete('/customer', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `customer` WHERE `Id`=?', [req.body.Id], function (error, results, fields) {
        if (error) throw error;
        res.end('Record has been deleted!');
    });
});*/