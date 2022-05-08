'use strict';

const buildMakeUser = require('./user');
const userSchema = require('./user-schema');
// TODU
const userValidator = require('../validator')(userSchema);

const makeUser = buildMakeUser(userValidator);

module.exports = makeUser;
