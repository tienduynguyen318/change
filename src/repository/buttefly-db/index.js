'use strict';

const { db } = require('../index');
const connection = db();

const getButteflyById = (id) => {
  console.log(id);
  return connection.get('butterflies').find({ id: id }).value();
};

const createButterfly = (butterflyData) => {
  return connection.get('butterflies').push(butterflyData).write();
};

module.exports = {
  getButteflyById,
  createButterfly
};
