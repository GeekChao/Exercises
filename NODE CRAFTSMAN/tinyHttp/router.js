const data = require('./data');

const router = {};

const registerHandlers = (method, pathname, handler) => {
    if(!router[method]) router[method] = new Map();

    router[method].set(pathname, handler);
};

registerHandlers('GET', '/', (res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    const text = `
        Welcome to the blog system! Please visit it by the following urls:

            * /api/authors   --- show all the authors
            * /api/author/:Kevin  --- show a author with a given name
            
            
        Enjoy it;
    `;
    res.end(text);
});


registerHandlers('GET', '/api/authors', (res) => {
    let authors;
    try {
        authors = JSON.stringify(data.getAuthors());
    } catch (error) {
        throw error;
    }
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(authors);
});

const handler = (method, pathname) => (res) => {
    const fun = router[method].get(pathname);
    if(fun) return fun(res);

    res.writeHead(404);
    res.end('404: Not Found');
}



module.exports = handler;