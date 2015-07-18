/**
 * Created by jsteel on 15-07-18.
 */
var express = require('express');
var app = express();

var server = app.listen(process.env.WIZARD_HTTP_PORT || 8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Wizard listening at http://%s:%s', host, port);
});

app.get('/', function(req, res) {
    res.send('This sure is a good card game.');
});

app.get('/games', function(req, res) {
    res.send('Return json list of games.');
});

app.get('/games/:id', function(req, res) {
    res.send('Return json describing the game with references to player ids.');
});

app.post('/games/:id', function(req, res) {
    res.send('Post an action to a game, returns json describing the game.');
});

app.post('/join/:id', function(req, res) {
   res.send('Joins the game and returns json describing the game.');
});

app.get('/players', function(req, res) {
    res.send('Gives a json list of players.')
});

app.get('/players/:id', function(req, res) {
    res.send('Gives json giving player info and games they are in.')
});