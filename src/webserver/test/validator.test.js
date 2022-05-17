'use strict';

const { butterflySchemaValidator, userSchemaValidator, ratingSchemaValidator } = require('../routes/validator');


describe('validate create butterfly schema', () => {
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

describe('validate create user schema', () => {
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

describe('validate create rating schema', () => {
  const validRating = {
    userId: 'abc',
    butterflyId: 'xyz',
    rating: 4
  };

  it('is ok for a valid user', () => {
    const result = ratingSchemaValidator(validRating);
    expect(result).toBe(undefined);
  });

  it('throws an error when invalid', () => {
    expect(() => {
      ratingSchemaValidator({});
    }).toThrow('The following properties have invalid values:');

    expect(() => {
      ratingSchemaValidator({
        extra: 'field',
        ...validRating
      });
    }).toThrow('The following keys are invalid: extra');

    expect(() => {
      ratingSchemaValidator({
        rating: 6
      });
    }).toThrow('The following properties have invalid values:');
  });
});
