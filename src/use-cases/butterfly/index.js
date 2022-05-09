'use strict';

const butterflyDb = require('../../persistedstorage/buttefly-db');
const makeButterfly = require('../../models/butterfly');

const findButterflyById = (id) => {
  return butterflyDb.getButteflyById(id);
};

const addButterfly = (butterflyData) => {
  const newButterfly = makeButterfly(butterflyData);
  return butterflyDb.createButterfly(newButterfly);
};

module.exports = {
  findButterflyById,
  addButterfly
};
