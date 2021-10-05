class PriorityQueue {
  constructor() {
    this.storage = [];
  }

  insert(transaction) {
    let isAdded = false;

    for(let i = 0; i < this.storage.length; i++) {
      const currDate = new Date(this.storage[i].timestamp);
      const transactionDate = new Date(transaction.timestamp);

      // console.log(currDate, ' is newer than.. ', transactionDate, (currDate.getTime() / 1000) > (transactionDate.getTime() / 1000));
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
}


const transactionQueue = new PriorityQueue();
transactionQueue.insert({ "payer": "MILLER COORS", "points": 10000, "timestamp": "2020-11-01T14:00:00Z" });
transactionQueue.insert({ "payer": "DANNON", "points": -200, "timestamp": "2020-10-31T15:00:00Z" });
transactionQueue.insert({ "payer": "UNILEVER", "points": 200, "timestamp": "2020-10-31T11:00:00Z" });
// transactionQueue.insert({ "payer": "DANNON", "points": 1000, "timestamp": "2020-11-02T14:00:00Z" });
console.log(transactionQueue.storage);

