const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home Page');
    }
    if(req.url === '/about'){
        res.end('About');
    }
    res.end(`
        <h1>Oops!</h1>
        <p>The following page does not exist</p>
    `);
});

server.listen(5001);