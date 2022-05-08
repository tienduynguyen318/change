'use strict';

const users = require('../../persistedstorage/user-db');

const findUsersById = (id) => {
  return users.getUserById(id);
};

module.exports = {
  findUsersById
};
