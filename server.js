// Import necessary modules
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

// Create an Express application
const app = express();

// Set the port for the server to run on
const port = 3010;

// Use bodyParser middleware to parse JSON in request bodies
app.use(bodyParser.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "dhritarashtra",
  password: "drusta@97",
  database: "questionapp",
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Serve static files from the "public" folder
app.use(express.static("public"));

// Define a route to get questions based on set_name
app.post("/questions", (req, res) => {
  const setName = req.body.setName;
  const setTableName = req.body.setTableName;

  console.log(setName);
  console.log(setTableName);
  // Updated SQL query without the time-based condition
  const query = `SELECT * FROM ${setTableName} WHERE set_name = ?`;

  connection.query(query, [setName], (err, results) => {
    if (err) {
      console.error("Error fetching questions:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    res.json(results);
  });
});

// Define a route to update the delay for a specific question
app.put("/answer-question/:questionid", (req, res) => {
  const { delayHours, questionId, x, y } = req.body;

  // const updateQuery = 'UPDATE questions SET delay_hours = ? WHERE id = ?';
  const updateQuery =
    "UPDATE questions SET delay_hours = ?, levelx = ?, levely = ? WHERE id = ?";

  connection.query(
    updateQuery,
    [delayHours, x, y, questionId],
    (err, result) => {
      if (err) {
        console.error("Error updating delay:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        console.log(
          `Updated delay for question with ID ${questionId} to ${delayHours} hours.`
        );
        // Continue with logic to handle answering the question, updating user progress, etc.
        res.json({ success: true });
      }
    }
  );
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
