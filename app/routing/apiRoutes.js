const express = require('express');
const friends = require('../data/friends.js');


server.use(express.urlencoded({extended: true}));
server.use(express.json());

module.exports( function apiRoutes(app) {
    app.get('/api/friends', (req,res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req,res)=> {
        let maxrange = 50;
        let match = 0;
        let friend = req.body;
        let friendpts = friend.score;
        for (let i = 0; i < friends.length; i++) {
            const score = friends[i].scores;
            var temp = 0;
            for (let j = 0; j < score.length; j++) {
               temp += Math.abs(parseInt(score[j])-parseInt((friendpts[j])))
                
            } if (temp < maxrange) {
                maxrange = temp;
                match = i;
            }
        }
        friends.push(req.body);
        res.json(friends[match])
    })
})

