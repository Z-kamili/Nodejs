const EventEmitter = require('events');
const http = require('http');
const server = http.createServer((req,res) => {
   if(req.urm === '/') {
    res.write('HELLO WORLD');
    res.end();
   }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});
server.listen(3000);
console.log('Listening on port 3000...');
const Logger = require('./logger');
const logger = new Logger();
//Register a listener

logger.on('messageLogged',(arg) => {
    console.log('Listener called',arg);
});

logger.log('message');



//Raise: logging (data: message)













