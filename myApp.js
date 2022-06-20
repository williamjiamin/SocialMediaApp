const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    if(url == "/profile"){
        res.setHeader('Content-type','text/html');
        res.write("<h1>This is lexueoude.com's profile page</h1>");
        return res.end();
    }

    res.setHeader('Content-type','text/html');
    res.write("<h1>Welcome  to lexueoude.com's other page.</h1>");
    res.end();


})

server.listen(30008);