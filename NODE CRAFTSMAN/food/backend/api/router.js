const router = require('express').Router();
const query = require('../query/query');
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

router.get('/api/keywords', (req, res) => {
    query.getKeywords()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
});

router.get('/api/categories', (req, res) => {
    query.getCategories()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
});

router.get('/api/keywordAndCategory', (req, res) => {
    query.getKeywordsAndCategories()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
});

router.post('/api/createKW', (req, res) => {
    const {keyword, category_id} = req.body;
    query.createKeyword(keyword, category_id)
        .then(result => res.sendStatus(200))
        .catch(err => res.status(500).json(err));
});

router.put('/api/updateKW', (req, res) => {
    const {keyword} = req.body;
    const {keyword_id} = req.query;
    query.updateKeyword(keyword, keyword_id)
        .then(result => res.sendStatus(200))
        .catch(err => res.status(500).json(err));
});

router.delete('/api/deleteKW', (req, res) => {
    const {keyword_id} = req.query;
    query.deleteKeyWord(keyword_id)
        .then(result => res.sendStatus(200))
        .catch(err => res.status(500).json(err));
});

module.exports= router;