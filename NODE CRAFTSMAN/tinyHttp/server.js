const http = require('http');
const url = require('url');
const handler = require('./router');
const containDynamicParam = require('./containDynamicParam');
const port = 8080;

const server = http.createServer((req, res) => {
    const method = req.method;
    const pathname = url.parse(req.url).pathname;
    const parsedUrl = containDynamicParam(pathname);
    handler(res)(method, parsedUrl);
});

server.listen(port, () => {
    console.log(`a tiny server is listening on ${port}`);
});