'use strict';
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const constants = require('../constants');

exports.db = function () {
  return lowdb(new FileSync(constants.DB_PATH));
};
