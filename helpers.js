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

 class PriorityQueue {
  constructor() {
    this.storage = [];
  }

  insert(transaction) {
    let isAdded = false;

    for(let i = 0; i < this.storage.length; i++) {
      const currDate = new Date(this.storage[i].timestamp);
      const transactionDate = new Date(transaction.timestamp);

      if (currDate > transactionDate) {
        if (i === 0) {
          this.storage.unshift(transaction);
        } else {
          this.storage.splice(i - 1, 0, transaction);
        }
        isAdded = true;
        break;
      }
    }

    if (!isAdded) {
      this.storage.push(transaction);
    }
  }
};

export {
  validate,
  PriorityQueue,
};