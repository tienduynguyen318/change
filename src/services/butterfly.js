'use strict';

const makeButterfly = require('../models/butterfly');
const { NotFoundError } = require('../models/error/error');

class ButterflyService {
  constructor(ButterflyRepository) {
    this.butterflyRepository = ButterflyRepository;
  }

  createButterfly(userData) {
    const newButterfly = makeButterfly(userData);
    try {
      this.butterflyRepository.addButterfly(newButterfly);
    } catch (error) {
      return error;
    }
    return newButterfly;
  }

  findButterflyById(id) {
    const butterfly = this.butterflyRepository.getButteflyById(id);
    if (butterfly === undefined) {
      throw new NotFoundError(`Not found object butterfly with id: ${id}`);
    }
    return butterfly;
  }
}

module.exports = ButterflyService;
