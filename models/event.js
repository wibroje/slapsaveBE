var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
  

var EventSchema = new Schema({
  name: String,
  type: String,
  city: String,
  address: String,
  description: String
});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;