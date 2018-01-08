var express = require("express");
var mongodb = require("mongodb");
var _ = require("lodash");
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var Example = mongoose.model("Example");

router.post("/", (req,res) => {
  var newExample = new Example({
  exampleString: req.body.exampleString
  })
})

router.get("/:id", (req, res) => {
  var exampleid = new mongodb.ObjectID(req.params["id"]);
  Example.findOne({"_id": exampleid},function (err, examples) {
    if (err) {
      res.send(err);
    } else {
      res.send(examples);
    }
  })
})

router.put("/:id", (req, res) => {
  var exampleid = new mongodb.ObjectID(req.params["id"]);
  Example.find({"_id": exampleid},function (err, example) {
    if (err) {
        res.status(500).send(err);
    } else {
        var example = example[0];
        example.exampleString = req.body.exampleString || example.exampleString;

        example.save(function (err, example) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(example);
        });
    }
});
})

router.delete("/", (req, res) => {
  var exampleid = req.body._id;
  Example.find({_id: exampleid}).remove().then(() => {
    res.send("success");
  })
})

module.exports = router;
