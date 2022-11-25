const fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);

function fs_module() 
{

    fs.readdir('./',function(err,files)
    {
    
        if(err) console.log('Error',err);
        else console.log('Result',files);
    
    });

}

module.exports = fs_module;
