'use strict';

const { db } = require('../index');
const connection = db();

const getUserById = (id) => {
  console.log(db);
  return connection.get('users').find({ id:id }).value();
};

module.exports = {
  getUserById
};
