const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/echo', (req, res) => {
  const receivedText = req.body.text;
  res.send(receivedText);
});

app.listen(port, () => {
  console.log(`Echo server listening at http://localhost:${port}`);
});