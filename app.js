var fs = require("fs");
var express = require('express');

var app = express();

app.route("/start")
.get(function(req, res, next){
   fs.readFile('UI\/firstPage.html', function(err, data) {
      if (data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
      } else {
         console.log("Error " + err);
      }
  });
});

// .post(function(req, res, next) {
//    res.send("You just called the post method at '/hello'!\n");
// });

app.listen(3000);