'use strict';

const v = require('@mapbox/fusspot');

function validateUsername(value) {
  if (typeof value !== 'string') {
    return ({ path }) =>
      `The input value '${value}' at ${path.join('.')} is not a valid username.`;
  }
}

const userModelValidator = v.assert(
  v.strictShape({
    username: v.required(validateUsername)
  })
);

module.exports = userModelValidator;
