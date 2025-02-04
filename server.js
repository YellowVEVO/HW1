const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.text());  // Use text parser to handle plain text data

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send("Server is running");
});

// Echo route
app.post('/', (req, res) => {
  const receivedText = req.body;  // Extract the received text
  res.send(receivedText);  // Return the same text back in the response
});

// Start the server
app.listen(port, () => {
  console.log(`Echo server running at http://localhost:${port}`);
});

module.exports = app;  // Export the app for testing
