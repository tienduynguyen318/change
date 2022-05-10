'use strict';

// const { type } = require('express/lib/response');
const { userSchemaValidator } = require('./validator');
const { NotFoundError  } = require('../../models/error/error');

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  show(req, res) {
    const { id } = req.params;
    let data = undefined;
    try {
      data = this.userService.findUserById(id);
    } catch (error) {
      if (error instanceof (NotFoundError)) {
        return res.status(404).json({ message: error.message });
      }
    }
    res.json(data);
  }

  create(req, res) {
    try {
      userSchemaValidator(req.body);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid request body' });
    }
    const data = this.userService.createUser(req.body);
    res.status(201).json(data);
  }
}

module.exports = UserController;
