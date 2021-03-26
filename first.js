var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('UI\/firstPage.html', function(err, data) {
        if (data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        } else {
            console.log("Error " + err);
        }
    });
}).listen(8091);