const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;  // Use Render-assigned port

app.use(bodyParser.json());  // Use bodyParser.json() to handle JSON

// Default route to check if the server is running
app.get('/', (req, res) => {
  res.send("Echo Server is running!");
});

// Echo route to respond with a JSON object containing the received text
app.post('/', (req, res) => {
  const receivedText = req.body.text;  // Access the 'text' field from the JSON request body
  if (receivedText) {
    res.json({ message: receivedText });  // Respond with JSON in the format {"message": "hello world"}
  } else {
    res.status(400).send("No text field in the request");
  }
});

app.listen(port, () => {
  console.log(`Echo server listening at http://localhost:${port}`);
});

module.exports = app;  // Export for testing
