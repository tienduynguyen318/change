'use strict';

const { db } = require('./index');
const connection = db();

class UserRepository {
  constructor() {
  }

  addRating(ratingData) {
    return connection.get('ratings').push(ratingData).write();
  }

  getRatingById(id) {
    return connection.get('ratings').find({ id: id }).value();
  }

  getRatingsByUserID(userId) {
    return connection.get('ratings').filter({ userId: userId }).values();
  }
}

module.exports = UserRepository;
