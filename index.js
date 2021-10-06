import express from 'express';
import {validate, PriorityQueue} from './helpers.js';

const app = express();
const port = 3000;
const payers = {};
const transactions = new PriorityQueue;

app.use(express.json());

app.post('/transaction', (req, res) => {
  const {payer, points, timestamp} = req.body;

  validate(payer, points, timestamp);

  if(!payers[payer]) {
    if (points < 0) {
      console.error('transaction error, points put payer in defecit');
      res.status(400);
    // res.sendStatus(400);
    } else {
      payers[payer] = points;
    }
  } else {
    payers[payer] += points;

    if (payers[payer] < 0) {
      payers[payer] -= points;
      console.error('transaction error, points put payer in defecit');
      res.status(400);
    }
  }
  console.log(payers);
  res.json(payers);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
