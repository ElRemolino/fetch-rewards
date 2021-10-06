const express = require('express');
const PriorityQueue = require('./dataStores/PriorityQueue');
const User = require('./dataStores/User');
// const helper = require('./helperFunctions.js');
const app = express();
const port = 3000;
const payers = {};
const transactions = new PriorityQueue();

app.use(express.json());
const test = (req, res, next) => {
  console.log('test', payers);
  next();
}
app.post('/transaction',test, (req, res) => {
  const {payer, points, timestamp} = req.body;

  if (typeof payer !== 'string' || payer.length === 0) {
    console.error('transaction error, payer is not a valid string');
    res.sendStatus(400);
  }

  if (typeof points !== 'number') {
    console.error('transaction error, points is not a valid number');
    res.sendStatus(400);
  }

  if ((new Date(timestamp)).getTime() <= 0) {
    console.error('transaction error, timestamp is not a valid date');
    res.sendStatus(400);
  }

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
