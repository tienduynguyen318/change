'use strict';

const { db } = require('../index');
const connection = db();

class UserRepository {
  constructor() {

  }

  async createUser(userData) {
    return connection.get('users').push(userData).write();
  }

  async getUserById(id) {
    return connection.get('users').find({ id: id }).value();
  }
}

module.exports = UserRepository;

// const getUserById = (id) => {
//   return connection.get('users').find({ id: id }).value();
// };

// const createUser = (userData) => {
//   return connection.get('users').push(userData).write();
// };

// module.exports = {
//   getUserById,
//   createUser
// };
