// csv source github.com/n8barr/automotive-model-year-data
var csv = require('csv'),
    fs = require('fs-extra'),
    cars = {};


csv()
  .from.path('cars.csv', {
    delimiter: ',',
    escape: '"',
    columns: true
  })
  .on('record', function(data, i) {
    var yr = data.year, mk = data.make, md = data.model;

    if (!cars[yr])
      cars[yr] = {};
    if(!cars[yr][mk])
      cars[yr][mk] = [];

    cars[yr][mk].push(md);

  })
  .on('end', function(count) {
    fs.writeJSONFile('../assets/data/cars.json', cars, function(err){
      if (err) throw err;
      console.log('Number of rows processed: ' + count);
    });
  })
  .on('error', function(error){
    console.log(error.message);
  });