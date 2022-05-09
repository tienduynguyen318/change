'use strict';

const express = require('express');
const router = express.Router();

const user = require('./user');
const butterfly = require('./butterfly');

router
  .get('/users/:id', user.show)
  .post('/users', user.create)
  .get('/butterflies/:id', butterfly.show)
  .post('/butterflies', butterfly.create);

module.exports = router;
