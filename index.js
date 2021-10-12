import express from 'express';
import { payers, postTransaction, transactions, validate } from './helpers.js';
import setupQueue from './tests.js';

const app = express();
const port = 3000;

app.use(express.json());

// adds a couple of transactions to our transactions queue
setupQueue();

app.post('/transaction', (req, res) => {
  const {payer, points, timestamp} = req.body;
  let error = false;

  validate(payer, points, timestamp);

  if (!postTransaction(req.body)) {
    error = true;
  };

  if (error) {
    res.sendStatus(400);
  }
  transactions.insert({ payer, points, timestamp })
  console.log(transactions)
  res.json(transactions)
});

app.get('/spend', (req, res) => {
  console.log('test get route');

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
