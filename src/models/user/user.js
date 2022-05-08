'use strict';

const buildMakeTeacher = function (teacherValidator) {
  return ({
    id,
    username
  } = {}) => {
    const { error } = teacherValidator({ id, username  });
    if (error) throw new Error(error);

    return {
      getId: () => id,
      getUsername: () => username
    };
  };
};

module.exports = buildMakeTeacher;
