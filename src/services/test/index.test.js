'use strict';
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const UserService = require('../user');
const UserRepository = require('../../repository/user');
const shortid = require('shortid');
const ButterflyService = require('../butterfly');
const ButterflyRepository = require('../../repository/butterfly');
const RatingService = require('../rating');
const RatingRepository = require('../../repository/rating');

describe('UserService', () => {
  describe('createUser', () => {
    it('should create new user', () => {
      const stubValue = {
        username: 'abc'
      };

      const userRepo = new UserRepository();
      const stub = sinon.stub(userRepo, 'addUser').returns(stubValue);

      const userService = new UserService(userRepo);
      const user = userService.createUser(stubValue);

      expect(stub.calledOnce).to.be.true;
      expect(user.username).to.equal(stubValue.username);
    });
  });
  describe('getUserById', () => {
    it('should return a user that matches the provided id', () => {
      const stubValue = {
        id: shortid.generate(),
        username: 'abc'
      };
      const userRepo = new UserRepository();
      const stub = sinon.stub(userRepo, 'getUserById').returns(stubValue);

      const userService = new UserService(userRepo);
      const user = userService.findUserById(stubValue.id);

      expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.username).to.equal(stubValue.username);
    });
  });
  describe('getUserById', () => {
    it('should return a user that matches the provided id', () => {
      const stubValue = {
        id: shortid.generate(),
        username: 'abc'
      };
      const userRepo = new UserRepository();
      const stub = sinon.stub(userRepo, 'getUserById').returns(stubValue);

      const userService = new UserService(userRepo);
      const user = userService.findUserById(stubValue.id);

      expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.username).to.equal(stubValue.username);
    });
  });
});

describe('ButterflyService', () => {
  describe('createButterfly', () => {
    it('should create new butterfly', async () => {
      const stubValue = {
        commonName: 'Brimstone',
        species: 'Gonepteryx rhamni',
        article: 'https://en.wikipedia.org/wiki/Gonepteryx_rhamni'
      };

      const butterflyRepo = new ButterflyRepository();
      const stub = sinon.stub(butterflyRepo, 'addButterfly').returns(stubValue);

      const butterflyService = new ButterflyService(butterflyRepo);
      const butterfly = butterflyService.createButterfly(stubValue);

      expect(stub.calledOnce).to.be.true;
      expect(butterfly.commonName).to.equal(stubValue.commonName);
      expect(butterfly.species).to.equal(stubValue.species);
      expect(butterfly.article).to.equal(stubValue.article);
    });
  });
  describe('getButterflyById', () => {
    it('should return a butterfly that matches the provided id', () => {
      const stubValue = {
        id: shortid.generate(),
        commonName: 'Brimstone',
        species: 'Gonepteryx rhamni',
        article: 'https://en.wikipedia.org/wiki/Gonepteryx_rhamni'
      };
      const butterflyRepo = new ButterflyRepository();
      const stub = sinon.stub(butterflyRepo, 'getButteflyById').returns(stubValue);

      const butterflyService = new ButterflyService(butterflyRepo);
      const butterfly = butterflyService.findButterflyById(stubValue.id);

      expect(stub.calledOnce).to.be.true;
      expect(butterfly.id).to.equal(stubValue.id);
      expect(butterfly.commonName).to.equal(stubValue.commonName);
      expect(butterfly.species).to.equal(stubValue.species);
      expect(butterfly.article).to.equal(stubValue.article);
    });
  });
});

describe('RatingService', () => {
  describe('createRating', () => {
    it('should create new rating', async () => {
      const ratingStubValue = {
        userId: 'mnp',
        butterflyId: 'flc',
        rating: 4
      };
      const userStubValue = {
        id: 'mnp',
        username: 'abc'
      };
      const butterflyStubValue = {
        id: 'flc',
        commonName: 'Brimstone',
        species: 'Gonepteryx rhamni',
        article: 'https://en.wikipedia.org/wiki/Gonepteryx_rhamni'
      };

      const butterflyRepo = new ButterflyRepository();
      sinon.stub(butterflyRepo, 'getButteflyById').returns(butterflyStubValue);
      const butterflyService = new ButterflyService(butterflyRepo);
      const userRepo = new UserRepository();
      sinon.stub(userRepo, 'getUserById').returns(userStubValue);
      const userService = new UserService(userRepo);
      const ratingRepo = new RatingRepository();
      const ratingStub = sinon.stub(ratingRepo, 'addRating').returns(ratingStubValue);

      const ratingService = new RatingService(ratingRepo, userService, butterflyService);
      const rating = ratingService.createRating(ratingStubValue);

      expect(ratingStub.calledOnce).to.be.true;
      expect(rating.userId).to.equal(ratingStubValue.userId);
      expect(rating.butterflyId).to.equal(ratingStubValue.butterflyId);
      expect(rating.rating).to.equal(ratingStubValue.rating);
    });
  });
  describe('findRatingByUserId', () => {
    it('should return a rating that matches the provided user id', () => {
      const ratingStubValue = {
        userId: 'mnp',
        butterflyId: 'flc',
        rating: 4
      };
      const userStubValue = {
        id: 'mnp',
        username: 'abc'
      };
      const butterflyStubValue = {
        id: 'flc',
        commonName: 'Brimstone',
        species: 'Gonepteryx rhamni',
        article: 'https://en.wikipedia.org/wiki/Gonepteryx_rhamni'
      };
      const butterflyRepo = new ButterflyRepository();
      sinon.stub(butterflyRepo, 'getButteflyById').returns(butterflyStubValue);
      const butterflyService = new ButterflyService(butterflyRepo);
      const userRepo = new UserRepository();
      sinon.stub(userRepo, 'getUserById').returns(userStubValue);
      const userService = new UserService(userRepo);
      const ratingRepo = new RatingRepository();
      const ratingStub = sinon.stub(ratingRepo, 'getRatingsByUserID').returns(ratingStubValue);

      const ratingService = new RatingService(ratingRepo, userService, butterflyService);
      const rating = ratingService.findRatingByUserId('mnp');

      expect(ratingStub.calledOnce).to.be.true;
      expect(rating.userId).to.equal(ratingStubValue.userId);
      expect(rating.butterflyId).to.equal(ratingStubValue.butterflyId);
      expect(rating.rating).to.equal(ratingStubValue.rating);
    });
  });
});

