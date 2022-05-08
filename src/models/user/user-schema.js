'use strict';

const Joi = require('joi');

module.exports = Joi.object().keys({
  id: Joi.string().required().error(() => 'must have id as string'),
  username: Joi.string().error(() => 'username must be a string')
});
