const http = require('http');

const server = http.createServer((req, res) =>{
    
    res.write('Hello World');
    res.end()
})
.listen('8080');

console.log('listening server 8080')
