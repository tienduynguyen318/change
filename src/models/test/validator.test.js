'use strict';

const butterflyModelValidator = require('../butterfly/validator');
const userModelValidator = require('../user/validator');
const ratingModelValidator = require('../rating/validator');


describe('validateButterfly', () => {
  const validButterfly = {
    commonName: 'Butterfly Name',
    species: 'Species name',
    article: 'http://example.com/article'
  };

  it('is ok for a valid butterfly', () => {
    const result = butterflyModelValidator(validButterfly);
    expect(result).toBe(undefined);
  });

  it('throws an error when invalid', () => {
    expect(() => {
      butterflyModelValidator({});
    }).toThrow('The following properties have invalid values:');

    expect(() => {
      butterflyModelValidator({
        ...validButterfly,
        commonName: 123
      });
    }).toThrow('commonName must be a string.');

    expect(() => {
      butterflyModelValidator({
        ...validButterfly,
        article: 'htp://example.com/article'
      });
    }).toThrow('The input value \'htp://example.com/article\' at article is not a valid article link.');

    expect(() => {
      butterflyModelValidator({
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
    const result = userModelValidator(validUser);
    expect(result).toBe(undefined);
  });

  it('throws an error when invalid', () => {
    expect(() => {
      userModelValidator({});
    }).toThrow('username is required');

    expect(() => {
      userModelValidator({
        extra: 'field',
        ...validUser
      });
    }).toThrow('The following keys are invalid: extra');

    expect(() => {
      userModelValidator({
        username: [555]
      });
    }).toThrow('The input value \'555\' at username is not a valid username');
  });
});

describe('validateRating', () => {
  const validRating = {
    rating: 1,
    userId: 'OOWzUaHLsK',
    butterflyId: 'xRKSdjkBt4'
  };
  it('is ok for a valid rating', () => {
    const result = ratingModelValidator(validRating);
    expect(result).toBe(undefined);
  });

  it('throws an error when invalid', () => {
    expect(() => {
      ratingModelValidator({
        extra: 'field',
        ...validRating
      });
    }).toThrow('The following keys are invalid: extra');

    expect(() => {
      ratingModelValidator({
        ...validRating,
        rating: 8
      });
    }).toThrow('The input value \'8\' at rating is not a valid rating.');

  });
});
