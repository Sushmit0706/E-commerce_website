const connection = require('../config/db');

const logUserLogin = (req, res) => {
  const { email, password } = req.body;


  const query = 'INSERT INTO login_details (user_email, user_pass) VALUES (?, ?)';
  connection.query(query, [ email,password], (err, results) => {
    if (err) {
      console.error('Error inserting login details:', err.stack);
      return res.status(500).send('Error logging in');
    }
    res.status(200).send('Login successful');
  });
};

module.exports = { logUserLogin };
