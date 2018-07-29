const data = require('./data');

const router = {};

const registerHandlers = (method, pathname, handler) => {
    if(!router[method]) router[method] = new Map();

    router[method].set(pathname, handler);
};

registerHandlers('GET', '/', (res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    const text = `
        <header>
            <h1>Welcome to the blog system!</h1>
        </header>
        <nav role='navigation'>
            <ul>
                <li>
                    <a href='/api/authors'>Show all the authors</a>
                </li>
                <li>
                    /api/author/:Kevin  --- show a author with a given name in the url
                </li>
            </ul>
        </section>
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

registerHandlers('GET', '/api/author', (res, param) => {
    if(!param) {
        res.writeHead(422);
        res.end('422: missing a dynamic parameter');
    }
    let author;
    try {
        author = JSON.stringify(data.getAuthor(param));
    } catch (error) {
        throw error;
    }

    if(!author){
        res.writeHead(404);
        res.end('404: this author not exist');
    }

    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(author);
});

const handler = (res) => (method, {pathname, param}) => {
    const fun = router[method].get(pathname);
    if(fun) return fun(res, param);

    res.writeHead(404);
    res.end('404: Not Found');
}



module.exports = handler;