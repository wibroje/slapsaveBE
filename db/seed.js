var models = require('../models');


models.Machine.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing Machines', err);
    return;
  }
  console.log('Removed all Machines');

  models.Machine.create([{
    title: 'Title', 
    description: 'Content',
    thumbnail_image_url: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
    year: 1995,
    manufacturer: 'Stern'
  }, {
    title: 'Another Title',
    description: 'Some more content',
    thumbnail_image_url: 'http://www.petmd.com/sites/default/files/sleepy-cat-125522297.jpg',
    year: 1980,
    manufacturer: 'Williams'
  }, {
    title: 'My Last Title',
    description: 'Yo some dope content',
    thumbnail_image_url: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/693C/production/_95804962_p0517py6.jpg',
    year: 1977,
    manufacturer: 'Bally'
  }], function(err, machines) {
    if (err) {
      console.log('Error creating Machines', err);
      return;
    }
    console.log('Created', machines.length, 'machines');
    return;
  });
});