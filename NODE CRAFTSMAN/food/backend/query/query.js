const db = require('./dbconnect');

function getCategories(){
    return new Promise((resolve, reject) => {
        db.connect().all('SELECT * FROM Category', [], (err, rows) => {
            if(err){
                reject(err);
            }
            resolve(rows);
        }); 
    
        db.close();
    });
}

function getKeywordsAndCategories(){
    return new Promise((resolve, reject) => {
        db.connect().all('SELECT keyword, category, Keywords.id FROM Keywords JOIN Category ON Keywords.category_id = Category.id', (err, rows) => {
            if(err){
                reject(err);
            }

            resolve(rows);
        });

        db.close();
    });
}

function createKeyword(keyword, category_id){
    return new Promise((resolve, reject) => {
        db.connect().run(`INSERT INTO Keywords (keyword, category_id) VALUES (?, ?)`, [keyword, category_id], (err) => {
            if(err){
                reject(err);
            }

            resolve('Insert successfully');
        });

        db.close();
    });
}

function updateKeyword(keyword, keyword_id){
    return new Promise((resolve, reject) => {
        db.connect().run(`UPDATE Keywords SET keyword = ? WHERE id = ?`, [keyword, keyword_id], (err) => {
            if(err){
                reject(err);
            }

            resolve('Update successfully');
        });
    });

    db.close();
}

function deleteKeyWord(keyword_id){
    return new Promise((resolve, reject) => {
        db.connect().run(`DELETE FROM Keywords WHERE id = ?`, [keyword_id], (err) => {
            if(err){
                reject(err);
            }

            resolve('Delete successfully');
        });
    });

    db.close();
}

module.exports = {
    getCategories,
    getKeywordsAndCategories,
    createKeyword,
    deleteKeyWord,
    updateKeyword
};
