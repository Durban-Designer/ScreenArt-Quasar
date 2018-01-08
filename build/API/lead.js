var mongoose = require("mongoose");
var LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: false,
    default: 'Needs Call'
  },
  url: {
    type: String,
    required: false
  },
  comment: {
    type: String,
    required: false
  }
})

var Lead = mongoose.model("Lead", LeadSchema);

module.exports = Lead;
