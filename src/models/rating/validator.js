'use strict';

const v = require('@mapbox/fusspot');

function validateRating(value) {
  if (typeof value !== 'number' || value > 5 || value < 0) {
    return ({ path }) =>
      `The input value '${value}' at ${path.join('.')} is not a valid rating.`;
  }
}

const ratingModelValidator = v.assert(
  v.strictShape({
    userId: v.required(v.string),
    butterflyId: v.required(v.string),
    rating: v.required(validateRating)
  })
);

module.exports = ratingModelValidator;
