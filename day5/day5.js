var fs = require("fs");
var stream;
stream = fs.createReadStream("data.txt");

stream.on("data", function(data) {
    var chunk = data.toString();
    console.log(chunk);
});

fs.open('data.txt', 'r', function(err, fd) {
  if (err) {
     return console.error(err);
  }
  console.log("File opened successfully!");     
});