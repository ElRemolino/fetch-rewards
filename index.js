import express from 'express';
import { payers, postTransaction, transactions, validate } from './helpers.js';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/transaction', (req, res) => {
  const {payer, points, timestamp} = req.body;
  let error = false;

  validate(payer, points, timestamp);

  if(!postTransaction(req.body)) {
    error = true;
  };

  res.json(payers);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
