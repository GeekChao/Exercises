const sqlite3 = require('sqlite3').verbose();
const path = require('path');

module.exports = {
    connect(){
        this.db = new sqlite3.Database(path.resolve(__dirname, '../../db/food.db'), sqlite3.OPEN_READWRITE, (err) => {
            if(err){
                throw err;
            }
        
            console.log('Connected to the Food database');
        });

        this.db.run('PRAGMA foreign_keys = ON', (err) => {
            if(err){
                throw err;
            }

            console.log('enable foreign key');
        });

        return this.db;
    },
    close(){
        if(this.db === undefined) throw 'Connect to the database first';

        this.db.close((err) => {
            if(err){
                throw err;
            }
        
            console.log('Closed the Food database');
            this.db = undefined;
        });
    }
};