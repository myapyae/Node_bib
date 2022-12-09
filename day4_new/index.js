var fs = require("fs");

var output = fs.readFileSync("input.txt")
console.log(output.toString());

fs.readFile("input.txt", function (err, data)
{
  console.log(data.toString());
})

console.log("Game Over");