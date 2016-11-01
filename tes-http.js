var a;
var f = require('firmata');
var b = new f.Board('/dev/ttyAMA0', function(err){
	if (err) {
		console.log(err);
	} else {
		b.pinMode(5, b.MODES.OUTPUT);
		b.pinMode(6, b.MODES.OUTPUT);
		b.pinMode(7, b.MODES.OUTPUT);
		b.pinMode(8, b.MODES.OUTPUT);
		b.pinMode(9, b.MODES.OUTPUT);

		b.pinMode(b.analogPins[1], b.MODES.ANALOG);
		b.pinMode(b.analogPins[2], b.MODES.ANALOG);
		b.pinMode(b.analogPins[3], b.MODES.ANALOG);
		b.pinMode(b.analogPins[4], b.MODES.ANALOG);
		b.pinMode(b.analogPins[5], b.MODES.ANALOG);

		b.analogRead(5, function(val) {
			a = val;
			console.log(a);
		});
	}
});

var express = require('express');
var app = express();
var f_debug = false;

function debug(txt) {
	if (f_debug) {
		console.log(txt);
	}
}


var content = "<div style='font-size:4em'><p>Analog 0: "+a+"</p><ul><li>CH.1 <a href='/1/on'>ON</a> | <a href='/1/off'>OFF</a></li><li>CH.2 <a href='/2/on'>ON</a> | <a href='/2/off'>OFF</a></li><li>CH.3 <a href='/3/on'>ON</a> | <a href='/3/off'>OFF</a></li><li>CH.4 <a href='/4/on'>ON</a> | <a href='/4/off'>OFF</a></li><li>CH.5 <a href='/5/on'>ON</a> | <a href='/5/off'>OFF</a></li></ul></div>";

app.get('/1/on', function(req,res){
	res.send('ch.1 ON'+content);
	b.digitalWrite(5, b.HIGH);
});

app.get('/1/off', function(req,res){
	res.send('ch.1 OFF'+content);
	b.digitalWrite(5, b.LOW);
});

app.get('/2/on', function(req,res){
	res.send('ch.2 ON'+content);
	b.digitalWrite(6, b.HIGH);
});

app.get('/2/off', function(req,res){
	res.send('ch.2 OFF'+content);
	b.digitalWrite(6, b.LOW);
});

app.get('/3/on', function(req,res){
	res.send('ch.3 ON'+content);
	b.digitalWrite(7, b.HIGH);
});

app.get('/3/off', function(req,res){
	res.send('ch.3 OFF'+content);
	b.digitalWrite(7, b.LOW);
});

app.get('/4/on', function(req,res){
	res.send('ch.4 ON'+content);
	b.digitalWrite(8, b.HIGH);
});

app.get('/4/off', function(req,res){
	res.send('ch.4 OFF'+content);
	b.digitalWrite(8, b.LOW);
});

app.get('/5/on', function(req,res){
	res.send('ch.5 ON'+content);
	b.digitalWrite(9, b.HIGH);
});

app.get('/5/off', function(req,res){
	res.send('ch.5 OFF'+content);
	b.digitalWrite(9, b.LOW);
});

app.listen(3000, function(){
	console.log("Listening @ port 3000");
});
