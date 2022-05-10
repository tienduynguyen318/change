'use strict';

const { butterflySchemaValidator, userSchemaValidator } = require('../routes/validator');


describe('validateButterfly', () => {
  const validButterfly = {
    commonName: 'Butterfly Name',
    species: 'Species name',
    article: 'http://example.com/article'
  };

  it('is ok for a valid butterfly', () => {
    const result = butterflySchemaValidator(validButterfly);
    expect(result).toBe(undefined);
  });

  it('throws an error when invalid', () => {
    expect(() => {
      butterflySchemaValidator({});
    }).toThrow('The following properties have invalid values:');

    expect(() => {
      butterflySchemaValidator({
        ...validButterfly,
        commonName: 123
      });
    }).toThrow('commonName must be a string.');

    expect(() => {
      butterflySchemaValidator({
        extra: 'field',
        ...validButterfly
      });
    }).toThrow('The following keys are invalid: extra');
  });
});

describe('validateUser', () => {
  const validUser = {
    username: 'test-user'
  };

  it('is ok for a valid user', () => {
    const result = userSchemaValidator(validUser);
    expect(result).toBe(undefined);
  });

  it('throws an error when invalid', () => {
    expect(() => {
      userSchemaValidator({});
    }).toThrow('username is required');

    expect(() => {
      userSchemaValidator({
        extra: 'field',
        ...validUser
      });
    }).toThrow('The following keys are invalid: extra');

    expect(() => {
      userSchemaValidator({
        username: [555]
      });
    }).toThrow('username must be a string');
  });
});


// TODU add test for rating
