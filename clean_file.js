// include node fs module
const { dir } = require("console");
var fs = require("fs");
var path = require("path");

// let dir = path.dirname(__filename +"./videos_records/*.webm");

// delete file named 'sample.txt'
fs.unlink(path.join(__dirname + "/videos"), function (err) {
  if (err) throw err;
  // if no error, file has been deleted successfully
  console.log("File deleted!");
});
