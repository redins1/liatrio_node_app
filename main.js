// Command: node .\main.js
var http = require('http');
const PORT = 3000;
const HOST = 'localhost';
let time = Date.now();
var seconds = time / 1000

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "message": "Automate all the things!" , "timestamp": Math.round(seconds)}, null, 2));
});
  
app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);