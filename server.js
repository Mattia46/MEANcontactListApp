var express = require('express');
var app = express();


app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log('Server up and runnig on post 3000');
