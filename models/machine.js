var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	CommentSchema = require('./comment').schema;
  

var MachineSchema = new Schema({
  name: String,
  image: String,
  year: Number,
  manufacturer: String,
  comments: [CommentSchema],
  video: String
});

var Machine = mongoose.model('Machine', MachineSchema);

module.exports = Machine;