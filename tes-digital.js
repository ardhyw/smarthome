"use strict"

var firmata = require("firmata");
var board = new firmata.Board("/dev/ttyAMA0", function(err){if(err){console.log(err);}});

var pinDigital = [5,6,7,8,9];
var i = 0;

board.on('ready', function() {
	console.log("Ready");

	board.pinMode(5, board.MODES.OUTPUT);
	board.pinMode(6, board.MODES.OUTPUT);
	board.pinMode(7, board.MODES.OUTPUT);
	board.pinMode(8, board.MODES.OUTPUT);
	board.pinMode(9, board.MODES.OUTPUT);

	board.pinMode(board.analogPins[1], board.MODES.ANALOG);
	board.pinMode(board.analogPins[2], board.MODES.ANALOG);
	board.pinMode(board.analogPins[3], board.MODES.ANALOG);
	board.pinMode(board.analogPins[4], board.MODES.ANALOG);
	board.pinMode(board.analogPins[5], board.MODES.ANALOG);

	setInterval(

function(){
	board.digitalWrite(pinDigital[i], board.LOW);
	if (i++ > 3) i = 0;
	board.digitalWrite(pinDigital[i], board.HIGH);
}, 2000);

});
