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
        this.storage.splice(i, 0, transaction);
        isAdded = true;
        break;
      }
    }

    if (!isAdded) {
      this.storage.push(transaction);
    }
  }

  dequeue() {
    this.storage.shift();
  }
 };

export default PriorityQueue;

