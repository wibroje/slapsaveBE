var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/slapsave");

module.exports.Machine = require("./machine");
