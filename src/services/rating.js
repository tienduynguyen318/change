'use strict';

const makeRating = require('../models/rating');
const { NotFoundError } = require('../models/error/error');

class RatingService {
  constructor(RatingRepository, UserService, ButterflyService) {
    this.ratingRepository = RatingRepository;
    this.userService = UserService;
    this.butterflyService = ButterflyService;
  }

  createRating(data) {
    const user = this.userService.findUserById(data.userId);
    const butterfly = this.butterflyService.findButterflyById(data.butterflyId);
    const makeRatingObject = { userId: user.id, butterflyId: butterfly.id, rating: data.rating };
    const newRating = makeRating(makeRatingObject);
    try {
      this.ratingRepository.addRating(newRating);
    } catch (error) {
      return error;
    }
    return newRating;
  }

  findRatingByUserId(userId) {
    const ratings = this.ratingRepository.getRatingsByUserID(userId);
    if (ratings.length === 0) {
      throw new NotFoundError(`Not found object rating with userId: ${userId}`);
    }
    return ratings;
  }
}

module.exports = RatingService;
