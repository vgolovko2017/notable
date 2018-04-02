
const garble = require('./app/routes/garble');
const logger = require('./app/routes/logger');
const util = require('util');


let Logger = new logger(module);
Logger.info("Hello22222222");


console.log(util.inspect(module));
process.exit(0);

//console.log(garble("Hello World"));
//process.exit(0);


var figlet = require("figlet");
figlet.text("Hello world!", function(error, data) {
    if (error)
        console.error(error);
    else
        console.log(data);
});

console.log('Hello!');

var fs = require("fs");

console.log('Hello!');

fs.readFile("file.txt", "utf-8", function (error, text) {

    console.log("44444444dddddddddddddd44");

    if (error) {
        console.log("Error: " + error);

        throw error;

    }
    console.log("-------", text);
})

const http2 = require("http");
const options = {
    hostname: "eloquentjavascript.net",
    path: "/20_node.html",
    method: "GET",
    headers: {Accept: "text/html"}
};

const request = http2.request(options, (res) => {
    res.setEncoding('utf8');
    console.log(`STATUS: ${res.statusCode}`);
    console.log(res.headers);

    res.on('data', (chunk) => {
        //console.log(`BODY: ${chunk}`);
    })
});

request.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

request.end();


function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log('Hello: ' + who.name);
}

var vasia = new User('vasia');
var petia = new User('petia');

vasia.hello(vasia);
//process.exit(0);






const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHeader(200);
    res.end("Hello Http !!!");
});

const EventEmitter = require('events').EventEmitter;
console.log(EventEmitter);

console.log([-1,-2,3].map(Math.abs));

server.listen(8080);
