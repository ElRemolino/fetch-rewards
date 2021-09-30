class User {
  constructor(name) {
    this.name = name;
    this.points = 0;
  }

  updatePoints(points) {
    if (points > 0 || this.points + points >= 0) {
      this.points += points;
    } else {
      return false;
    }
  }

}

module.exports = User;