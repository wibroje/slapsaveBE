var models = require('../models');
var Machine = models.Machine;

function index(req, res) {
  Machine.find({}, function(err, machines) {
    if (err) res.send(err);
    else res.json(machines);
  });
}

function show(req, res) {
  Machine.findById(req.params.machine_id, function(err, machine){
    if (err) res.send(err);
    else res.json(machine);
  });  
}

function create(req, res) {
  Machine.create(req.body, function(err, machine){
    if (err) res.end(err);
    else res.json(machine);
  });
}

function update(req, res) {
  Machine.findByIdAndUpdate(req.params.machine_id, 
    {$set: req.body}, function(err, machine){
    if (err) res.send(err);
    else res.json(machine);
  });
}

function destroy(req, res) {
  Machine.findByIdAndRemove(req.params.machine_id, function(err, machine){
    if (err) res.send(err);
    else res.send("machine deleted");
  }); 
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;