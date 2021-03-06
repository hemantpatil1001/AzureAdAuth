var express = require('express');
var app = express();

const authenticator = require('./authenticator.js')

app.get('/', function (req, res) {
    
  res.send('Hello World!');
});

app.get('/validate', function(req,res){
    // authenticator.decodedValidToken(req.headers.token)
    res.send(authenticator.decodedToken);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});