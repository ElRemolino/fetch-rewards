import PriorityQueue from './PriorityQueue.js';

 const payers = {};
 const transactions = new PriorityQueue();

 const postTransaction = ({ payer, points, timestamp }) => {
   const errMsg = 'transaction error, points put payer in defecit';
   let error = false;

   if(!payers[payer]) {
     if (points < 0) {
      return false;
      } else {
        payers[payer] = points;
      }
    } else {
      payers[payer] += points;

      if (payers[payer] < 0) {
        payers[payer] -= points;
        return false;
      }
    }

    return true;
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
