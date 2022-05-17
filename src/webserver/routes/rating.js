'use strict';

const { ratingSchemaValidator } = require('./validator');
const { NotFoundError } = require('../../models/error/error');

class RatingController {
  constructor(ratingService) {
    this.ratingService = ratingService;
  }

  show(req, res) {
    const { id } = req.params;
    let data = undefined;
    try {
      data = this.ratingService.findRatingByUserId(id);
    } catch (error) {
      if (error instanceof (NotFoundError)) {
        return res.status(404).json({ message: error.message });
      }
    }
    res.json(data);
  }

  create(req, res) {
    try {
      ratingSchemaValidator(req.body);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid request body' });
    }
    let data = undefined;
    try {
      data = this.ratingService.createRating(req.body);
    } catch (error) {
      if (error instanceof (NotFoundError)) {
        return res.status(404).json({ message: error.message });
      }
    }
    res.status(201).json(data);
  }
}

module.exports = RatingController;
