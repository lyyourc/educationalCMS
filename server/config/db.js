import mysql from 'mysql';

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'newCMS'
});

con.connect(err => {
  if (err) {
    console.log('Error connecting to db', err);
    return;
  }

  console.log('Connection established');
});

export default con;
