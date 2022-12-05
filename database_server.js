var express = require('express');
var app = express();

var port = 3000;
var categoryName;
var amount=[5];
console.log("Server is running! (listening on port " + port + ")");
app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query(window.location.href.split("?")[1])));
        
        var jsontext = JSON.stringify({
        });
        console.log(jsontext);
        res.send(jsontext);
}).listen(3000);
console.log("Output images amount ["+amount+"] with category");


