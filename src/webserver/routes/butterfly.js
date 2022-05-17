'use strict';

const { butterflySchemaValidator } = require('./validator');
const { NotFoundError } = require('../../models/error/error');

class ButterflyController {
  constructor(butterflyService) {
    this.butterflyService = butterflyService;
  }

  show(req, res) {
    const { id } = req.params;
    let data = undefined;
    try {
      data = this.butterflyService.findButterflyById(id);
    } catch (error) {
      if (error instanceof (NotFoundError)) {
        return res.status(404).json({ message: error.message });
      }
    }

    res.json(data);
  }

  create(req, res) {
    try {
      butterflySchemaValidator(req.body);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid request body' });
    }
    const data = this.butterflyService.createButterfly(req.body);
    res.status(201).json(data);
  }
}

module.exports = ButterflyController;
