var events = require("events");

// create event emitter object
var eventEmitter = new events.EventEmitter();

var connectionHandler = function connected() {
	console.log('connection successful');

	eventEmitter.emit('data_received');
}


eventEmitter.on('connection',connectionHandler);

eventEmitter.on('data_received',function(){
	console.log('evnet receinted succes fully');
});


// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");