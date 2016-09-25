var os = require("os");
var mod1 = require("./module1");
var EventEmitter = require("events").EventEmitter;
var request = require("request");
var fs = require("fs");
var zlib = require("zlib");

console.log('Host: ' + os.hostname());
console.log("Value from module 1: " + mod1.foo);

var getResource = function() {
    var e  = new EventEmitter();
    e.emit("start");
    e.emit("data", 5);
    e.emit("done");
    return e;
};

var r = getResource();
r.on("start", function () {
    console.log("Started");
});
r.on("data", function(count){
    console.log("Data received: " + count);
});
r.on("done", function () {
    console.log("Done");
});


var s = request("http://www.google.co.in/");
s.pipe(process.stdout);

request("http://www.google.co.in/").pipe(fs.createWriteStream("google.html"));

request("http://www.google.co.in/")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("google.html.gz"));