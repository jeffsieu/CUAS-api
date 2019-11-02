'use strict';
var express = require('express');
var url = require('url');
var router = express.Router();
var TYPES = require('tedious').TYPES;

/* GET task listing. */
router.get('/customers', function (req, res) {

    req.sql("select * from InfoReporting for json path")
        .into(res, '[]');

});

router.post('/report', function (req, res) {
    var params = url.parse(req.url, true).query;
    
    req.sql("Insert into InfoReporting values(@UserID,@AndroidID,@Altitude,@Bearing,@Colour,@Latitude,@Longitude,@Light,@NearestLandmark,@Payload,@Speed,@Timestamp)")
        .param('AndroidID', params.AndroidID, TYPES.NVarChar)
        .param('Altitude', params.Altitude, TYPES.NVarChar)
        .param('Bearing', params.Bearing, TYPES.NVarChar)
        .param('Colour', params.Colour, TYPES.NVarChar)
        .param('Latitude', params.Latitude, TYPES.NVarChar)
        .param('Longitude', params.Longitude, TYPES.NVarChar)
        .param('Light', params.Light, TYPES.NVarChar)
        .param('NearestLandmark', params.NearestLandmark, TYPES.NVarChar)
        .param('Payload', params.Payload, TYPES.NVarChar)
        .param('Speed', params.Speed, TYPES.NVarChar)
        .param('Timestamp', params.Timestamp, TYPES.DateTime2)
        .param('UserID', params.UserID, TYPES.NVarChar)
        .exec(res);
    console.log(params);
});

module.exports = router;


