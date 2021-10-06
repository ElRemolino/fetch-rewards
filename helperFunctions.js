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
}


module.exports = {
  validate,
};