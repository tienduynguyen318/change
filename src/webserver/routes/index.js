'use strict';

const express = require('express');
const router = express.Router();

const users = require('./users');

router
  .get('/users/:id', users.show);

module.exports = router;
