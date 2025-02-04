const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse the request body
app.use(express.text());

// POST route to echo the request body
app.post('/', (req, res) => {
  res.status(200).send(req.body); // Respond with the same body received
});

app.listen(port, () => {
  console.log(`Echo server listening on port ${port}`);
});
