'use strict';

const UserRepository = require('../../repository/user');
const UserService = require('../../services/user');
const ButterflyRepository = require('../../repository/butterfly');
const ButterflyService = require('../../services/butterfly');
const RatingRepository = require('../../repository/rating');
const RatingService = require('../../services/rating');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const butterflyRepository = new ButterflyRepository();
const butterflyService = new ButterflyService(butterflyRepository);
const ratingRepository = new RatingRepository();
const ratingService = new RatingService(ratingRepository, userService, butterflyService);

module.exports = {
  userRepository,
  userService,
  butterflyRepository,
  butterflyService,
  ratingRepository,
  ratingService
};
