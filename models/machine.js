var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  

var MachineSchema = new Schema({
  title: String,
  description: String,
  thumbnail_image_url: String,
  year: Number,
  manufacturer: String
});

var Machine = mongoose.model('Machine', MachineSchema);

module.exports = Machine;