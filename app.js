const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
        
    res.statusCode = 200;

    if (req.url == "/") {
        res.setHeader('Content-type', 'text/html');
        fs.readFile('V2/index.html', (err,html) => {
            if (err) {
                throw err;
            }

            res.end(html);
        });
    } else if (req.url == "/index.css") {
        res.setHeader('Content-type', 'text/css');
        fs.readFile('V2/index.css', (err,css) => {
            if (err) {
                throw err;
            }
        
            res.end(css); 
        });
    }
    
});


server.listen(port, hostname, () => {
    console.log("Server started on " + hostname + ':' + port);
});