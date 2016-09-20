var os = require("os");
var mod1 = require("./module1");

console.log('Host: ' + os.hostname());
console.log("Value from module 1: " + mod1.foo);