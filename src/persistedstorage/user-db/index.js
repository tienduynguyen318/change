'use strict';

const { db } = require('../index');
const connection = db();

const getUserById = (id) => {
  return connection.get('users').find({ id: id }).value();
};

const createUser = (userData) => {
  return connection.get('users').push(userData).write();
};

module.exports = {
  getUserById,
  createUser
};
