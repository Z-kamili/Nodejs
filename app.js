const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged',(arg) => { // e, eventArg
    console.log('Listener called',arg);
});

const log = require('./logger');

log('message');


//Raise: logging (data: message)













