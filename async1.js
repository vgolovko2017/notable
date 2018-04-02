
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var info;

    if (req.url == '/') {
        info = fs.readFile('index.html');
        res.end(info);
    }
    else if (req.url == '/now') {
        res.end(new Date().toString());
    }

}).listen(8000, () => {
    console.log('We are live on ' + 8000);
});
