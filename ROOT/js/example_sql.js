/* Testing Initial Connection to Local DB */
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Your Own Special Password',
  database: 'sitepoint'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

/* Reading data that's already in the database*/
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Your Own Special Password',
  database: 'sitepoint'
});

con.query('SELECT * FROM authors', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
})

/* Creating New Data To Put In The Database */
const author = { name: 'Craig Buckler', city: 'Exmouth' };
con.query('INSERT INTO authors SET ?', author, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});

/* Updating Data to Edit Data Already In The Database */
con.query(
  'UPDATE authors SET city = ? Where ID = ?',
  ['Buffalo', 5],
  (err, result) => {
    if (err) throw err;

    console.log(`Changed ${result.changedRows} row(s)`);
  }
);

/* Deleting Data That's Already In The Database */
con.query(
  'DELETE FROM authors WHERE id = ?', [7], (err, result) => {
    if (err) throw err;

    console.log(`Deleted ${result.affectedRows} row(s)`);
  }
);