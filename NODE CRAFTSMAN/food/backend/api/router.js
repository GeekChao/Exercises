const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('<p>Hello World</p>');
});

module.exports= router;