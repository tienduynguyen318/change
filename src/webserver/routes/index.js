'use strict';

const express = require('express');
const router = express.Router();

const UserController = require('./user');
const ButterflyController = require('./butterfly');
const RatingController = require('./rating');
const { userService, butterflyService, ratingService } = require('./dependency');
const userController = new UserController(userService);
const butterflyController = new ButterflyController(butterflyService);
const ratingController = new RatingController(ratingService);

router
  .get('/users/:id', userController.show.bind(userController))
  .post('/users', userController.create.bind(userController))
  .get('/butterflies/:id', butterflyController.show.bind(butterflyController))
  .post('/butterflies', butterflyController.create.bind(butterflyController))
  .get('/ratings/:id', ratingController.show.bind(ratingController))
  .post('/ratings', ratingController.create.bind(ratingController));

module.exports = router;
