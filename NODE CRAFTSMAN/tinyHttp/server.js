const http = require('http');
const url = require('url');
const handler = require('./router');
const port = 8080;

const server = http.createServer((req, res) => {
    const method = req.method;
    const pathname = url.parse(req.url).pathname;
    handler(method, pathname)(res);
});

server.listen(port, () => {
    console.log(`a tiny server is listening on ${port}`);
});