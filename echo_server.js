var http = require('http');
var url = require('url');

var server = new http.Server(function (req, res) {


    console.log(req.headers);



    console.log(req.method, req.url);

    let urlParse = url.parse(req.url, true);
    console.log(urlParse);

    if (!(urlParse.pathname === '/echo' && urlParse.query.message)) {
        res.statusCode = 404;
        res.end('Page not found')
    } else {
        res.end(urlParse.query.message);
    }

});

server.listen(8000, () => {
    console.log('We are live on ' + 8000);
});


/*
var http = require('http');
var requestListener = function (req, res) {
    console.log(req.method, req.url);
    res.writeHead(200);
    res.end('Hello, World!\n');
}

var server = http.createServer(requestListener);
server.listen(8000, () => {
    console.log('We are live on ' + 8000);
});
*/