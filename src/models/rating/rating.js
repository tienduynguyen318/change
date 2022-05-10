'use strict';

const shortid = require('shortid');
const { ValidationError } = require('../error/error');

const buildRating = function (ratingModelValidator) {
  return ({
    userId,
    butterflyId,
    rating
  } = {}) => {
    const error = ratingModelValidator({ userId, butterflyId, rating });
    if (error) throw new ValidationError(error);
    // const error = ratingModelValidator({ userId, butterflyId, rating });
    // if (error) throw new ValidationError(error);
    return {
      id: shortid.generate(),
      userId: userId,
      butterflyId: butterflyId,
      rating: rating
    };
  };
};

module.exports = buildRating;
