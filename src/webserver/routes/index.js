'use strict';

const express = require('express');
const router = express.Router();

const UserController = require('./user');
const { userService } = require('./dependency');
console.log('8', userService);
const userController = new UserController(userService);

router
  .get('/users/:id', userController.show)
  .post('/users', userController.create);
// .get('/butterflies/:id', butterfly.show)
// .post('/butterflies', butterfly.create);

// const user = require('./user');
// const butterfly = require('./butterfly');

// router
//   .get('/users/:id', user.show)
//   .post('/users', user.create)
//   .get('/butterflies/:id', butterfly.show)
//   .post('/butterflies', butterfly.create);

module.exports = router;
