'use strict';

const usersUseCase = require('../../use-cases/users-db');

const users = module.exports = {};

users.show = (req, res, ) => {
  usersUseCase.findUsersById('id', req.params.id)
    .then((data) => {
      res.send(data);
    });
};
