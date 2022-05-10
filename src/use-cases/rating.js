'use strict';

const makeRating = require('../models/rating');
const { NotFoundError } = require('../models/error/error');

class RatingService {
  constructor(RatingRepository, UserService, ButterflyService) {
    this.ratingRepository = RatingRepository;
    this.userService = UserService;
    this.butterflyService = ButterflyService;
  }

  // TODU
  createRating(data) {
    const user = this.userService.findUserById(data.userId);
    const butterfly = this.butterflyService.findButterflyById(data.butterflyId);
    const newRating = makeRating(user.id, butterfly.id, data.rating);
    console.log('18', newRating);
    try {
      this.ratingRepository.addRating(newRating);
    } catch (error) {
      return error;
    }
    return newRating;
  }

  // TODU
  findRatingByUserId(userId) {
    const ratings = this.ratingRepository.getRatingsByUserID(userId);
    console.log('29', ratings);
    if (ratings.length === 0) {
      throw new NotFoundError(`Not found object rating with userId: ${userId}`);
    }
    return ratings;
  }
}

module.exports = RatingService;
