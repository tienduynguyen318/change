'use strict';

const buildRating = require('./rating');
const ratingModelValidator = require('./validator');

const makeRating = buildRating(ratingModelValidator);

module.exports = makeRating;
