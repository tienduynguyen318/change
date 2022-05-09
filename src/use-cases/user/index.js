'use strict';

const userDb = require('../../persistedstorage/user-db');
const makeUser = require('../../models/user');

const findUserById = (id) => {
  return userDb.getUserById(id);
};

const addUser = (userData) => {
  const newUser = makeUser(userData);
  return userDb.createUser(newUser);
};

module.exports = {
  findUserById,
  addUser
};
