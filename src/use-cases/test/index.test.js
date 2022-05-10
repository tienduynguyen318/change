'use strict';
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const UserService = require('../user');
const UserRepository = require('../../repository/user');
const shortid = require('shortid');
const ButterflyService = require('../butterfly');
const ButterflyRepository = require('../../repository/butterfly');

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
  describe('getUserById', () => {
    it('should return a user that matches the provided id', () => {
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

// TODU add test for rating
