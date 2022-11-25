var msg = require('./os.js');
var filesystem = require('./filesystem.js');
const EventEmitter = require('events');

const emitter = new EventEmitter();

msg();

filesystem();

//Register a listener
emitter.on('messageLogged',function(arg) {

    console.log('Listener called',arg);
 
 });
 
 
 //Raise an event
 emitter.emit('messageLogged',{id:1,url:'http://'});









