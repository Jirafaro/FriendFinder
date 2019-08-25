const path = require('path')
const express = require('express');

const server = express.Router();

server.use(express.static(path.join(__dirname, './public')));

server.get('/', function (req,res,err) {
    if (err) {
        throw err;
    } else {
        res.send(path.join(__dirname, '../public/home.html'));
    }
})
server.get('/survey', function (req, res, err) {
    if (err) {
        throw err;
    } else {
        res.send(path.join(__dirname, '../public/survey.html'));
    }
})
server.get('*', function (req, res, err) {
    if (err) {
        throw err;
    } else {
        res.send(path.join(__dirname, '../public/home.html'));
    }
})

module.exports = server;