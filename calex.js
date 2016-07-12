var express = require('express');
var a=require('./cal');
var app = express();

app.get('/add/:tagId1/:tagId2', function(req, res) {
  res.send(''+a.add(parseInt(req.params.tagId1),parseInt(req.params.tagId2)));
});

app.get('/sub/:tagId1/:tagId2', function(req, res) {
  res.send(''+a.sub(parseInt(req.params.tagId1),parseInt(req.params.tagId2)));
});

app.get('/mul/:tagId1/:tagId2', function(req, res) {
  res.send(''+a.multi(parseInt(req.params.tagId1),parseInt(req.params.tagId2)));
});

app.get('/div/:tagId1/:tagId2', function(req, res) {
  res.send(''+a.div(parseInt(req.params.tagId1),parseInt(req.params.tagId2)));
});

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
