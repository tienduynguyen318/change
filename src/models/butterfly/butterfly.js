'use strict';

const shortid = require('shortid');

const buildButterfly = function (butterflyValidator) {
  return ({
    commonName,
    species,
    article
  } = {}) => {
    const error = butterflyValidator({ commonName, species, article });
    if (error) throw new Error(error);

    return {
      id: shortid.generate(),
      commonName: commonName,
      species: species,
      article: article
    };
  };
};


module.exports = buildButterfly;
