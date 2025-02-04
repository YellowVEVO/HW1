const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // Use Render-assigned port

app.use(bodyParser.json());

// Default route to check if the server is running
app.get('/', (req, res) => {
  res.send("Echo Server is running!");
});

// Echo route
app.post('/echo', (req, res) => {
  const receivedText = req.body.text;
  res.json({ message: receivedText });
});

app.listen(port, () => {
  console.log(`Echo server listening at http://localhost:${port}`);
});