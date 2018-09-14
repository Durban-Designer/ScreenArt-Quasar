var express = require("express");
var mongodb = require("mongodb");
var _ = require("lodash");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
app.use(bodyParser.json());
var fs = require('fs');
var multiparty = require('multiparty');
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
var path = __dirname + "/img/";
var sinchSms = require('sinch-sms') ({
  key: '8623407a-c954-4b57-980f-ff3a3088b279',
  secret: 'W9hLHeFezUWzbjffgMfJ3A==',
  ssl: true
})

router.post("/", (req,res) => {
  function label (location) {
    client
    .textDetection(location)
    .then(results => {
      console.log(location);
      fs.unlinkSync(location);
      const detections = results[0].fullTextAnnotation;
      res.setHeader('content-type', 'application/json');
      res.send({ text: detections, all: results[0] });
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  }
  var form = new multiparty.Form();
  form.parse(req, function(err, fields, files) {
    console.log(fields, files)
    let part = files.file[0].path
    label(part)
    console.log('Upload completed!');
  });
})

router.post("/contact", (req, res) => {
  sinchSms.send(
    '+16025581817',
    `New Message from ${req.body.name},
    Phone: ${req.body.phone},
    Email: ${req.body.email},
    Message: ${req.body.message}`
  ).then(function (response) {
    console.log(response)
    res.send('success')
  }).fail(function (error) {
    console.log(error)
    res.status(401).SEND(error)
  })
})

module.exports = router;
