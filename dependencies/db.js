const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./database.db', (err) => {
    if(err){
        console.error('Database connection failed : ', err.message);
    } else {
        console.log('Database connection successful');
    }
});

module.exports = db;