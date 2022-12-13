const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/reading", function(req, res) {
  fs.readFile(__dirname+"/user.json","utf-8", (err, data) => {
    if (err) throw err;
    const user = JSON.parse(data);
    res.send(user);
  });
});


app.post("/writing", function (req, res)  {
  fs.readFile(__dirname+"/user.json","utf-8", (err, data) => {
    if (err) throw err;
    const newUser = JSON.parse(data);
    newUser.push({
      "name": "Lisa",
      "password": "password6",
      "profession": "Singer",
      "id": 11
    });
  
    res.send(newUser);
  });
 
});

app.listen(8000, function () {
  console.log("Server is listening at port 8000");
})