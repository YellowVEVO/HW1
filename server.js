const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Echo Server is running!");
});

app.post('/', (req, res) => {
  const receivedText = req.body.text;
  res.json({ message: receivedText });
});

app.listen(port, () => {
  console.log(`Echo server listening at http://localhost:${port}`);
});

module.exports = app;
