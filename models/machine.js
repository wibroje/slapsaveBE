var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  

var MachineSchema = new Schema({
  name: String,
  ipdb_link: String,
  year: Number,
  manufacturer: String
});

var Machine = mongoose.model('Machine', MachineSchema);

module.exports = Machine;