class PriorityQueue {
  constructor() {
    this.storage = [];
  }

  insert(transaction) {
    let isAdded = false;

    for(let i = 0; i < this.storage.length; i++) {
      if (this.storage[i].timestamp > transaction.timestamp) {
        if (this.storage.length === 1) {
          this.storage.unshift(transaction);
        } else {
          this.storage.splice(i - 1, 0, transaction);
        }
        isAdded = true;
        break;
      }
    }

    if (this.storage.length === 0) {
      this.storage.push(transaction);
    }
  }
}


let queue = new PriorityQueue();
queue.insert({ "payer": "DANNON", "points": 1000, "timestamp": "2020-11-02T14:00:00Z" });
queue.insert({ "payer": "UNILEVER", "points": 200, "timestamp": "2020-10-31T11:00:00Z" });
queue.insert({ "payer": "MILLER COORS", "points": 10000, "timestamp": "2020-11-01T14:00:00Z" });
queue.insert({ "payer": "DANNON", "points": -200, "timestamp": "2020-10-31T15:00:00Z" });
console.log(queue.storage)

// if ("2020-10-31T11:00:00Z" > "2020-10-31T15:00:00Z") {
//   console.log('false')
// } else {
//   console.log('true')
// }