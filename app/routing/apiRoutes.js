const express = require('express');
const friends = require('../data/friends');
const server = express.Router();

server.use(express.urlencoded({extended: true}));
server.use(express.json());


