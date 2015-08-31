'use strict';

var bodyParser = require('body-parser');
var connect    = require('connect');
var fs         = require('fs');
var http       = require('http');
var send       = require('connect-send-json');

var app  = connect();
var port = 1337;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
app.use(send.json());

app.use('/v1/elements/', function(req, res) {
    /* CORS
    Access-Control-Allow-Headers: Content-Type
    Access-Control-Allow-Methods: GET, POST, OPTIONS
    Access-Control-Allow-Origin: *
    */
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

    switch(req.method) {
        case 'POST':
            break;
        case 'GET':
            fs.readFile('./api/elements.json', 'utf8', function(err, data) {
                if(err) {
                    console.log(err);
                    throw err;
                }

                res.write(data);
                res.end();
            });
            break;
        case 'PUT':
            break;
        default:
    }

});

app.use('/v1/elements/element', function(req, res) {
    switch(req.method) {
        case 'POST':
            break;
        case 'GET':
            break;
        case 'PUT':
            break;
        default:
    }

    res.end();
});

// respond to all requests
app.use('/', function(req, res) {
    res.end('Element API');
});

var server = http.createServer(app);
server.listen(port);
