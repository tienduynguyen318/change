'use strict';

const makeUser = require('../../models/user');

class UserService {
  constructor(UserRepository) {
    this.userRepository = UserRepository;
  }

  async addUser(userData) {
    const newUser = makeUser(userData);
    return this.userRepository.createUser(newUser);
  }

  findUserById(id) {
    return this.userRepository.getUserById(id);
  }
}

module.exports = UserService;

// const userDb = require('../../repository/user-db');
// const makeUser = require('../../models/user');

// const findUserById = (id) => {
//   return userDb.getUserById(id);
// };

// const addUser = (userData) => {
//   const newUser = makeUser(userData);
//   return userDb.createUser(newUser);
// };

// module.exports = {
//   findUserById,
//   addUser
// };
