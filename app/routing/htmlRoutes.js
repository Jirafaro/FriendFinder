const path = require('path')
const express = require('express');

module.exports = function htmlRoutes (app) {
    app.get('/', function (res,req) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get('/survey', function (res,req) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
    app.get('*', function (res,req) {
        res.redirect('/');
    })
}