const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',     
  user: 'root', 
  password: 'Hassen1235@_',
  database: 'inventory_mange' 
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as ID', db.threadId);
});

module.exports = db;
