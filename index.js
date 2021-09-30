const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/transaction', (req, res) => {
  const {payer, points, timestamp} = req.body;

  if (typeof payer !== 'string' || payer.length === 0) {
    console.error('transaction error, payer is not a valid string');
  }

  if (typeof points !== 'number') {
    console.error('transaction error, points is not a valid number');
  }

  if ((new Date(timestamp)).getTime() <= 0) {
    console.error('transaction error, timestamp is not a valid date');
  }

  res.send(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
