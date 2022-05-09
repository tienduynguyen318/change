'use strict';

const { validateUser  } = require('../../validators');

class UserController {
  constructor(userService) {
    this.userService = userService;
    console.log('88', userService);
    console.log('89', this.userService);
  }

  show(req, res) {
    const { id } = req.params;
    console.log('133', this.userService);
    const data = this.userService.findUserById(id);
    res.json(data);
  }

  create(req, res) {
    try {
      validateUser(req.body);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid request body' });
    }
    const data = this.userService.addUser(req.body);
    res.json(data);
  }
}

module.exports = UserController;

// const userUseCases = require('../../use-cases/user');
// const { validateUser  } = require('../../validators');

// const users = module.exports = {};

// users.show = (req, res) => {
//   const { id } = req.params;
//   const data = userUseCases.findUserById(id);
//   res.json(data);
// };

// users.create = (req, res) => {
//   // TODU
//   try {
//     validateUser(req.body);
//   } catch (error) {
//     return res.status(400).json({ error: 'Invalid request body' });
//   }
//   const data = userUseCases.addUser(req.body);
//   res.json(data);
// };
