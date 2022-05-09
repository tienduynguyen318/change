'use strict';

const shortid = require('shortid');

const buildUser = function (userModelValidator) {
  return ({
    username
  } = {}) => {
    const error = userModelValidator({ username });
    if (error) throw new Error(error);

    return {
      id : shortid.generate(),
      username: username
    };
  };
};

module.exports = buildUser;
