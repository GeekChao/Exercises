const express = require('express');
const api = require('./api/router');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const app = express();

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(api);

app.listen(port, () => {
    console.log(`server starts listening at ` + port);
});

module.exports = app;