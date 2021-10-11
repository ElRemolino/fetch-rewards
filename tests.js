import { payers, transactions } from './helpers.js';

transactions.insert({ "payer": "DANNON", "points": 1000, "timestamp": "2020-11-02T14:00:00Z" });
transactions.insert({ "payer": "UNILEVER", "points": 200, "timestamp": "2020-10-31T11:00:00Z" });
transactions.insert({ "payer": "DANNON", "points": -200, "timestamp": "2020-10-31T15:00:00Z" });
transactions.insert({ "payer": "MILLER COORS", "points": 10000, "timestamp": "2020-11-01T14:00:00Z" });
transactions.insert({ "payer": "DANNON", "points": 300, "timestamp": "2020-10-31T10:00:00Z" });

console.log('transactions: ', transactions);
// const currDate = new Date("2020-10-31T11:00:00Z");
// const transactionDate = new Date("2020-10-31T15:00:00Z");

// console.log(currDate > transactionDate)