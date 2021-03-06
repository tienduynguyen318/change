'use strict';

const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const UserController = require('../routes/user');
const UserService = require('../../services/user');
const ButterflyController = require('../routes/butterfly');
const ButterflyService = require('../../services/butterfly');
const RatingController = require('../routes/rating');
const RatingService = require('../../services/rating');
const { NotFoundError } = require('../../models/error/error');

describe('UserController', () => {
  describe('create user', () => {
    let status, json, res, userController, userService;
    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
      const userRepo = sinon.spy();
      userService = new UserService(userRepo);
      userController = new UserController(userService);
    });
    it('success', async () => {
      const stubValue = {
        username: 'abc'
      };
      const req = { body: stubValue };
      const stub = sinon.stub(userService, 'createUser').returns(stubValue);
      userController.create(req, res);
      expect(stub.calledOnce).to.be.true;
      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(201);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0]).to.equal(stubValue);
    });
    it('error - missing all attributes', async () => {
      const req = { body: {} };
      userController.create(req, res);
      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(400);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0].error).to.equal('Invalid request body');
    });
  });
  describe('get user', () =>{
    let status, json, req, res, userController, userService;
    beforeEach(() => {
      req = { params: { id: 'abcd1234' } };
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
      const userRepo = sinon.spy();
      userService = new UserService(userRepo);
      userController = new UserController(userService);
    });
    it('success', async () => {
      const stubValue = {
        id: 'abcd1234',
        username: 'abc'
      };
      const stub = sinon.stub(userService, 'findUserById').returns(stubValue);
      userController.show(req, res);
      expect(stub.calledOnce).to.be.true;
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0]).to.equal(stubValue);
    });
    it('error - not found', async () => {
      const error = new NotFoundError('some fake error');
      const stub = sinon.stub(userService, 'findUserById').throws(error);
      userController.show(req, res);
      expect(stub.calledOnce).to.be.true;
      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(404);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0].message).to.equal('some fake error');
    });
  });
});

describe('ButterflyController', () => {
  describe('create butterfly', () => {
    let status, json, res, butterflyController, butterflyService;
    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
      const butterflyRepo = sinon.spy();
      butterflyService = new ButterflyService(butterflyRepo);
      butterflyController = new ButterflyController(butterflyService);
    });
    it('success', async () => {
      const stubValue = {
        commonName: 'Brimstone',
        species: 'Gonepteryx rhamni',
        article: 'https://en.wikipedia.org/wiki/Gonepteryx_rhamni'
      };
      const req = { body: stubValue };
      const stub = sinon.stub(butterflyService, 'createButterfly').returns(stubValue);
      butterflyController.create(req, res);
      expect(stub.calledOnce).to.be.true;
      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(201);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0]).to.equal(stubValue);
    });
    it('error - missing all attributes', async () => {
      const req = { body: {} };
      butterflyController.create(req, res);
      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(400);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0].error).to.equal('Invalid request body');
    });
    it('error - missing some attributes', async () => {
      const req = {
        body: {
          commonName: 'Brimstone',
          species: 'Gonepteryx rhamni'
        } };
      butterflyController.create(req, res);
      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(400);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0].error).to.equal('Invalid request body');
    });
  });
  describe('get butterfly', () => {
    let status, json, req, res, butterflyController, butterflyService;
    beforeEach(() => {
      req = { params: { id: 'abcd1234' } };
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
      const butterflyRepo = sinon.spy();
      butterflyService = new ButterflyService(butterflyRepo);
      butterflyController = new ButterflyController(butterflyService);
    });
    it('success', async () => {
      const stubValue = {
        id: 'abcd1234',
        commonName: 'Brimstone',
        species: 'Gonepteryx rhamni',
        article: 'https://en.wikipedia.org/wiki/Gonepteryx_rhamni'
      };
      const stub = sinon.stub(butterflyService, 'findButterflyById').returns(stubValue);
      butterflyController.show(req, res);
      expect(stub.calledOnce).to.be.true;
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0]).to.equal(stubValue);
    });
    it('error - not found', async () => {
      const error = new NotFoundError('some fake error');
      const stub = sinon.stub(butterflyService, 'findButterflyById').throws(error);
      butterflyController.show(req, res);
      expect(stub.calledOnce).to.be.true;
      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(404);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0].message).to.equal('some fake error');
    });
  });
});

describe('RatingController', () => {
  describe('create rating', () => {
    let status, json, res, ratingController, ratingService;
    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
      const ratingRepo = sinon.spy();
      ratingService = new RatingService(ratingRepo);
      ratingController = new RatingController(ratingService);
    });
    it('success', async () => {
      const stubValue = {
        userId: 'afs',
        butterflyId: 'abc',
        rating: 5
      };
      const req = { body: stubValue };
      const stub = sinon.stub(ratingService, 'createRating').returns(stubValue);
      ratingController.create(req, res);
      expect(stub.calledOnce).to.be.true;
      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(201);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0]).to.equal(stubValue);
    });
    it('error - missing all attributes', async () => {
      const req = { body: {} };
      ratingController.create(req, res);
      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(400);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0].error).to.equal('Invalid request body');
    });
    it('error - missing some attributes', async () => {
      const req = {
        body: {
          userId: 'Gonepteryx rhamni',
          rating: 4
        }
      };
      ratingController.create(req, res);
      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(400);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0].error).to.equal('Invalid request body');
    });
  });
  describe('get rating', () => {
    let status, json, req, res, ratingController, ratingService;
    beforeEach(() => {
      req = { params: { id: 'abcd1234' } };
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
      const ratingRepo = sinon.spy();
      ratingService = new RatingService(ratingRepo);
      ratingController = new RatingController(ratingService);
    });
    it('success', async () => {
      const stubValue = {
        id: 'abcd1234',
        userId: 'abc',
        butterflyId: 'xyz',
        rating: 4
      };
      const stub = sinon.stub(ratingService, 'findRatingByUserId').returns(stubValue);
      ratingController.show(req, res);
      expect(stub.calledOnce).to.be.true;
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0]).to.equal(stubValue);
    });
    it('error - not found', async () => {
      const error = new NotFoundError('some fake error');
      const stub = sinon.stub(ratingService, 'findRatingByUserId').throws(error);
      ratingController.show(req, res);
      expect(stub.calledOnce).to.be.true;
      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(404);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0].message).to.equal('some fake error');
    });
  });
});
