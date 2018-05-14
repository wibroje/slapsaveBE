var models = require('../models');
var Event = models.Event;

function index(req, res) {
  Event.find({}, function(err, events){
    if (err) res.send(err);
    else res.json(events);
  });
}

function show(req, res) {
  Event.findById(req.params.event_id, function(err, event){
    if (err) res.send(err);
    else res.json(event);
  });
}

function create(req, res) {
  Event.create(req.body, function(err, event){
    if (err) res.end(err);
    else res.json(event);
  });
}

function update(req, res) {
  Event.findByIdAndUpdate(req.params.event_id, 
    {$set: req.body}, function(err, event){
    if (err) res.send(err);
    else res.json(event);
  });
}

function destroy(req, res) {
  Event.findByIdAndRemove(req.params.event_id, function(err, event){
    if (err) res.send(err);
    else res.send("event deleted");
  }); 
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;