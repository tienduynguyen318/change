'use strict';

const { db } = require('./index');
const connection = db();

class ButterflyRepository {
  constructor() {
  }

  addButterfly(userData) {
    return connection.get('butterflies').push(userData).write();
  }

  getButteflyById(id) {
    return connection.get('butterflies').find({ id: id }).value();
  }
}

module.exports = ButterflyRepository;
