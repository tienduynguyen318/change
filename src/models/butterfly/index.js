'use strict';

const buildButterfly = require('./butterfly');
const butterflyValidator = require('./validator');

const makeButterfly = buildButterfly(butterflyValidator);

module.exports = makeButterfly;
