import PriorityQueue from './PriorityQueue.js';

 const payers = {};
 const transactions = new PriorityQueue();

 const postTransaction = ({ payer, points, timestamp }) => {
   if(!payers[payer]) {
     if (points < 0) {
       console.error('transaction error, points put payer in defecit');
       res.status(400);
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
  }

  const spend = () => {
    
  }

  const validate = (payer, points, timestamp) => {
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
 };
 export {
  payers,
  transactions,
  postTransaction,
  validate
};
