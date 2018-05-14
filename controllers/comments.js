var models = require('../models');
var Machine = models.Machine;
var Comment = models.Comment;

function create(req, res) {
  Comment.create(req.body, function(err, comment){
    if (err) res.end(err);
    else {
      Machine.findById(req.params.machine_id, function(err, machine) {
        if (err) res.send(err);
        else {
          machine.comments.push(comment);
          machine.save();
          res.json(comment);
        }
      })
    }
  });
}

function update(req, res) {
  console.log('****', req.body);
  Comment.findByIdAndUpdate(req.params.comment_id, 
    {$set: req.body}, function(err, comment){
    if (err) res.send(err);
    else res.json(comment);
  });
}

function destroy(req, res){
	Comment.findByIdAndRemove(req.params.comment_id, function(err, comment) {
		if (err) res.send(err);
		else res.send('comment deleted');
	})
}

module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;

