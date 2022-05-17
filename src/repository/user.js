'use strict';

const { db } = require('./index');
const connection = db();

class UserRepository {
  constructor() {
  }

  addUser(userData) {
    return connection.get('users').push(userData).write();
  }

  getUserById(id) {
    return connection.get('users').find({ id: id }).value();
  }
}

module.exports = UserRepository;
