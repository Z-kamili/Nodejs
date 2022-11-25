const EventEmitter = require('events');
const emitter = new EventEmitter();


// Register a listener
emitter.on('messageLogged',(arg) => { // e, eventArg
    console.log('Listener called',arg);
});

//Raise an event
emitter.emit('messageLogged',{id:1,url:'http://'});












