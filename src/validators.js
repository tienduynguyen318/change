'use strict';

const v = require('@mapbox/fusspot');

const validateButterfly = v.assert(
  v.strictShape({
    commonName: v.required(v.string),
    species: v.required(v.string),
    article: v.required(v.string)
  })
);

function validateUsername(value) {
  if (typeof value !== 'string') {
    return ({ path }) =>
      `The input value '${value}' at ${path.join('.')} is not a valid username.`;
  }
}

const validateUser = v.assert(
  v.strictShape({
    username: v.required(validateUsername)
  })
);

// TODU
const validateRating = v.assert(
  v.strictShape({

  })
);

module.exports = {
  validateButterfly,
  validateUser,
  validateRating
};
