var express = require('express');
var app = express();

//Add the mongo db
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

//added npm install doby-parse
var bodyParser =  require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
  console.log("I received the GET request");

  db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactlist', function(req, res) {
  console.log(req.body);
  db.contactlist.insert(req.body, function(err, doc) {
    res.json(doc);
  });

});

app.delete('/contactlist/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc);
  });
});

app.get('/contactlist/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/contactlist/:id', function(req, res) {
  var id = req.params.id;
  db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
new: true}, function(err, doc) {
  res.json(doc);
});
});

app.listen(3000);
console.log('Server up and runnig on post 3000');
