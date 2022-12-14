var express = require('express');
var router = express.Router();

router.route('/hello')
  .get(function (req, res) {
  res.send("Get the phone with api")
  })

  .post(function (req, res) {
    res.send("posting the photo with api")
  })

router.route('/user/:id')
  .get(function (req, res) {
    res.send("user id= " +req.params.id)
  })

  module.exports=router