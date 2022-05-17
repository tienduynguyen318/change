'use strict';

const v = require('@mapbox/fusspot');

const butterflySchemaValidator = v.assert(
  v.strictShape({
    commonName: v.required(v.string),
    species: v.required(v.string),
    article: v.required(v.string)
  })
);

const userSchemaValidator = v.assert(
  v.strictShape({
    username: v.required(v.string)
  })
);

function validateRating(value) {
  if (typeof value !== 'number' || value > 5 || value < 0) {
    return ({ path }) =>
      `The input value '${value}' at ${path.join('.')} is not a valid rating.`;
  }
}

const ratingSchemaValidator = v.assert(
  v.strictShape({
    userId: v.required(v.string),
    butterflyId: v.required(v.string),
    rating: v.required(validateRating)
  })
);

module.exports = {
  butterflySchemaValidator,
  userSchemaValidator,
  ratingSchemaValidator
};
