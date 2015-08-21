var dirfilter = require('./dir-filterer');

dirfilter(process.argv[2], process.argv[3], function(err, fileNames) {
  if (err) {
    console.error(error);
    return;
  }

  console.log(fileNames.join('\n'));
});