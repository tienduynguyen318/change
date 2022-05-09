'use strict';

const buildUser = require('./user');
const userModelValidator = require('./validator');

const makeUser = buildUser(userModelValidator);

module.exports = makeUser;
