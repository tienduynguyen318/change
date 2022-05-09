'use strict';

const userUseCases = require('../../use-cases/user');
const { validateUser  } = require('../../validators');

const users = module.exports = {};

users.show = (req, res) => {
  const { id } = req.params;
  const data = userUseCases.findUserById(id);
  res.json(data);
};

users.create = (req, res) => {
  // TODU
  try {
    validateUser(req.body);
  } catch (error) {
    return res.status(400).json({ error: 'Invalid request body' });
  }
  const data = userUseCases.addUser(req.body);
  res.json(data);
};
