
'use strict';

const bodyParser     = require('body-parser');
const app            = require('express')();
const mysql 	     = require('mysql');
const dbConfig	     = require('./dbconf');
const session        = require('express-session');
const fileStore      = require('session-file-store')(session);
const port 	         = 8000;

// fix for "Access-Control-Allow-Origin" error during ajax request
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(session({
    name: 'notable-session-66548737845DDffe312',
    secret: 'my express secret',
    saveUninitialized: true,
    resave: true,
    store: new fileStore()
}));

app.use(bodyParser.urlencoded({ extended: true }));
require('./app/routes/note_routes')(app, mysql, dbConfig);

// console.log(TEST100);

app.listen(port, () => {
	console.log('We are live on ' + port);
});

