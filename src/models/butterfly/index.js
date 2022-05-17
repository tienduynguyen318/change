'use strict';

const buildButterfly = require('./butterfly');
const butterflyModelValidator = require('./validator');

const makeButterfly = buildButterfly(butterflyModelValidator);

module.exports = makeButterfly;
