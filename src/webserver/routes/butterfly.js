'use strict';

const butterfyUseCases = require('../../use-cases/butterfly');
const { validateButterfly } = require('../../validators');

const butterflies = module.exports = {};

butterflies.show = (req, res) => {
  const { id } = req.params;
  const data = butterfyUseCases.findButterflyById(id);
  res.json(data);
};

butterflies.create = (req, res) => {
  // TODU
  try {
    validateButterfly(req.body);
  } catch (error) {
    return res.status(400).json({ error: 'Invalid request body' });
  }
  const data = butterfyUseCases.addButterfly(req.body);
  res.json(data);
};
