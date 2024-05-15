const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'ecom'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);
});

app.post('/api/register', (req, res) => {
  const { name, email, password, address, mobileNumber } = req.body;
  const query = 'INSERT INTO users (name, email, password, address, mobile_number) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [name, email, password, address, mobileNumber], (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    console.log('User registered successfully');
    res.status(200).json({ message: 'User registered successfully' });
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
