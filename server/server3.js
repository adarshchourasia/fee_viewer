var express = require("express");
var app = express();
var fs = require("fs");
const cors = require("cors");
app.use(cors());

app.get("/getData", function (req, res) {
  fs.readFile(__dirname + "/" + "test_data.json", "utf8", function (err, data) {
    res.end(data);
  });
});

var server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server Running", host, port);
});
