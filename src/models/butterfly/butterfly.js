'use strict';

const shortid = require('shortid');
const { ValidationError } = require('../error/error');

const buildButterfly = function (butterflyModelValidator) {
  return ({
    commonName,
    species,
    article
  } = {}) => {
    const error = butterflyModelValidator({ commonName, species, article });
    if (error) throw new ValidationError(error);

    return {
      id: shortid.generate(),
      commonName: commonName,
      species: species,
      article: article
    };
  };
};


module.exports = buildButterfly;
