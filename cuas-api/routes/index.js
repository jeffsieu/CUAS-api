'use strict';
var express = require('express');
var router = express.Router();
var TYPES = require('tedious').TYPES;

/* GET task listing. */
router.get('/', function (req, res) {

    req.sql("select * from InfoReporting for json path")
        .into(res, '[]');

});

module.exports = router;