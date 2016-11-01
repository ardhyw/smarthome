"use strict"

var firmata = require("firmata");
var board = new firmata.Board("/dev/ttyAMA0", function(err){if(err){console.log(err); return;}else{
//board.reset();
//console.log("lanjut!");
//board.analogRead(1, function(val){console.log(val)});
}});

board.on('ready', function() {
	console.log("Ready");
	board.analogRead(1, function(val){console.log(val)});
});


