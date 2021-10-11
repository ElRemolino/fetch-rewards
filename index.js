import express from 'express';
import { payers, postTransaction, transactions, validate } from './helpers.js';
import setupSampleQueue from './tests.js';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/transaction', (req, res) => {
  const {payer, points, timestamp} = req.body;
  let error = false;

  validate(payer, points, timestamp);

  if (!postTransaction(req.body)) {
    error = true;
  };

  res.json(payers);
});

app.get('/spend', (req, res) => {
  setupSampleQueue();
  console.log('transactions: ', transactions);
  
  res.json(transactions)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
