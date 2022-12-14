var express = require('express');
const router = require('route.js');

var app = express();

app.get('/hi', function (req, res) {
  res.send("Get the phone")
})

app.post('/hola', function (req, res) {
  res.send("Posting the photo")
})

app.use('/API', router);
app.listen(8000, function () {
  console.log("App listening at 8000");
})