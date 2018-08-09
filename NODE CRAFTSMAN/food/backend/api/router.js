const router = require('express').Router();
const query = require('../query/query');
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

router.get('/keywords', (req, res) => {
    query.getKeywords()
        .then(JSON.stringify)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
});

router.get('/categories', (req, res) => {
    query.getCategories()
        .then(JSON.stringify)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
});

router.post('/createKW', (req, res) => {
    const {keyword, category_id} = req.body;
    query.createKeyword(keyword, category_id)
        .then(result => res.sendStatus(200))
        .catch(err => res.status(500).json(err));
});

router.put('/updateKW', (req, res) => {
    const {keyword, keyword_id} = req.body;
    query.updateKeyword(keyword, keyword_id)
        .then(result => res.sendStatus(200))
        .catch(err => res.status(500).json(err));
});

router.delete('/deleteKW', (req, res) => {
    const {keyword_id} = req.body;
    query.deleteKeyWord(keyword_id)
        .then(result => res.sendStatus(200))
        .catch(err => res.status(500).json(err));
});

module.exports= router;