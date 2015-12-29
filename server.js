var express = require('express');
var app = express();


app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
  console.log("I received the GET request");

  person1 = {
    name: "Mattia",
    email: "mattia@gmail.com",
    number: "12345"
  };

  person2 = {
    name: "Maria",
    email: "maria@gmail.com",
    number: "12345"
  };

  person3 = {
    name: "Mario",
    email: "Mario@gmail.com",
    number: "12345"
  };

  var contactlist = [person1, person2, person3];
  res.json(contactlist);
});

app.listen(3000);
console.log('Server up and runnig on post 3000');
