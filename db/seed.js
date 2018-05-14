var models = require('../models');

var commentsData = [{
  content: 'I am real love this game',
  name: 'BILLY'
}, {
  content: 'Killed em in one hit',
  name: 'DUNKEY'
}, {
  content: 'Easiest machine NA',
  name: 'JOSIE'
}];

models.Comment.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing comments: ', err);
    return;
  }
  console.log('Removed all Comments');

  models.Comment.create(commentsData, function(err, comments) {
    if (err) {
      console.log('Error creating comments: ', err);
      return;
    }
    console.log('Created', comments.length, 'comments');
    return;
  })
});


models.Machine.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing Machines', err);
    return;
  }
  console.log('Removed all Machines');

  models.Machine.create([{
    name: 'Attack From Mars',
    image: 'https://billiardsnmore.com/wp-content/uploads/2018/03/afm0-2-300x300.jpg',
    year: 1995,
    manufacturer: 'Bally',
    comments: [commentsData[0], commentsData[1], commentsData[2], commentsData[0]],
    video: 'https://www.youtube.com/embed/xri-ffVoPqo'
  }, {
    name: 'Medieval Madness',
    image: 'https://images.pinside.com/6/94/694efb6710a64841ad07b4397a098b68d50c5c15/squared/bigthumb/694efb6710a64841ad07b4397a098b68d50c5c15.jpg',
    year: 1997,
    manufacturer: 'Williams',
    comments: [commentsData[1]],
    video: 'https://www.youtube.com/embed/6wb_x3q3z14'
  }, {
    name: 'Theatre of Magic',
    image: 'https://lh6.ggpht.com/PUAWgirtPi9Thp2fsLUGCzdUNUHrcfmFyAtyNGZIb5sMLlzFf2eglX0MhjonUi4EmTQwSWQA19GJdf_JKRVah8oiywlr=s300-c',
    year: 1995,
    manufacturer: 'Bally',
    comments: [commentsData[2]],
    video: 'https://www.youtube.com/embed/PMYdwfq8mng'
  }, {
    name: 'The Twilight Zone',
    image: 'https://billiardsnmore.com/wp-content/uploads/2017/08/tz0-300x300.jpg',
    year: 1993,
    manufacturer: 'Bally',
    comments: [commentsData[0]],
    video: 'https://www.youtube.com/embed/DYy0aNj9GLU'
  }, {
    name: 'Monster Bash',
    image: 'https://images.pinside.com/0/f1/0f1a189a2f2caa5a1c8dc52040aa7731c73e469d/squared/bigthumb/0f1a189a2f2caa5a1c8dc52040aa7731c73e469d.jpg',
    year: 1998,
    manufacturer: 'Williams',
    comments: [commentsData[1]],
    video: 'https://www.youtube.com/embed/5mFFmopZ5Y8'
  }, {
    name: 'White Water',
    image: 'http://lightedpinballmods.com/wp-content/uploads/2018/01/s-l1600-6-7-300x300.jpg',
    year: 1993,
    manufacturer: 'Williams',
    comments: [commentsData[2]],
    video: 'https://www.youtube.com/embed/9zVJLyIf-F8'
  }], function(err, machines) {
    if (err) {
      console.log('Error creating Machines', err);
      return;
    }
    console.log('Created', machines.length, 'machines');
    return;
  });
});

models.Event.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing Events', err);
    return;
  }
  console.log('Removed all Events');

  models.Event.create([{
    name: `Big Sally's Happy Slappy Birthday Grindfest`,
    type: 'Casual',
    city: 'Newport, ME',
    address: `Paul's Pinball Palace`,
    description: `It's my birthday you bastards, come get drunk and suck at pinball for three hours`
  }, {
    name: `Super Important Tournament`,
    type: 'Tournament',
    city: 'Eau Claire, WI',
    address: 'Eau Claire Games and Arcade',
    description: `It's the annual SIT, come on down and be a tryhard`
  }], function(err, events) {
    if (err) {
      console.log('Error creating events', err);
      return;
    }
    console.log('Created', events.length, 'events');
    return;
  });
});



