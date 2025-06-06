const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(bodyParser.json());


// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "ecom",
// });
const connection = mysql.createConnection({
  host: process.env.DB_HOST,     // ✅ these must be set correctly
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL as id", connection.threadId);
});




//to save  data of user
app.post("/api/register", (req, res) => {
  const { name, email, password, address, mobileNumber } = req.body;
  const query =
    "INSERT INTO users (name, email, password, address, mobile_number) VALUES (?, ?, ?, ?, ?)";
  connection.query(
    query,
    [name, email, password, address, mobileNumber],
    (err, result) => {
      if (err) {
        console.error("Error registering user:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      console.log("User registered successfully");
      res.status(200).json({ message: "User registered successfully" });
    }
  );
});

//for login auth
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT id FROM users WHERE email = ? AND password = ?";
  connection.query(query, [email, password], (err, result) => {
    if (err) {
      console.error("Error logging in:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    if (result.length === 0) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }
    const userId = result[0].id;
    console.log("Login successful for user ID:", userId);

    // Save login details to the login_details table
    const loginDetailsQuery = "INSERT INTO login_details (user_email, user_pass, login_time) VALUES (?, ?, ?)";
    const loginTime = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format the date for MySQL
    connection.query(loginDetailsQuery, [email, password, loginTime], (loginDetailsErr, loginDetailsResult) => {
      if (loginDetailsErr) {
        console.error("Error saving login details:", loginDetailsErr);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      console.log("Login details saved successfully");
      res.status(200).json({ message: "Login successful", userId });
    });
  });
});

// API endpoint to handle checkout form submission
app.post('/checkout', (req, res) => {
  const {userId, firstName, lastName, email, address, address2, country, state, zip } = req.body;
  const query = 'INSERT INTO checkout_details (user_id, first_name, last_name, email, address, address2, country, state, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [userId, firstName, lastName, email, address, address2, country, state, zip]; // Replace 1 with the actual user ID

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting into MySQL: ' + err.stack);
      res.status(500).json({ error: 'Failed to submit form' });
      return;
    }
    res.status(200).json({ message: 'Form submitted successfully' });
  });
});




const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
