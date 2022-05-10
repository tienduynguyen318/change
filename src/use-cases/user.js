'use strict';

const makeUser = require('../models/user');
const { NotFoundError } = require('../models/error/error');

class UserService {
  constructor(UserRepository) {
    this.userRepository = UserRepository;
  }

  createUser(userData) {
    const newUser = makeUser(userData);
    try {
      this.userRepository.addUser(newUser);
    } catch (error) {
      return error;
    }
    return newUser;
  }

  findUserById(id) {
    const user = this.userRepository.getUserById(id);
    if (user === undefined) {
      throw new NotFoundError(`Not found object user with id: ${id}`);
    }
    return user;
  }
}

module.exports = UserService;

