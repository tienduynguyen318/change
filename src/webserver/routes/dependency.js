'use strict';

const UserRepository = require('../../repository/user-db');
const UserService = require('../../use-cases/user');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

module.exports = {
  userRepository,
  userService
};
