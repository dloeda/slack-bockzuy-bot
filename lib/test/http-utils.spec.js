'use strict'

const chai = require('chai')
const expect = chai.expect
const http = require('../http-utils')
const sinon = require('sinon')
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

describe('http-utils', () => {
  describe('should have defined', () => {
    it('init method', () => {
      expect(http).to.have.property('init').and.is.a('Function')
    })
    it('get method', () => {
      expect(http).to.have.property('get').and.is.a('Function')
    })
    it('post method', () => {
      expect(http).to.have.property('post').and.is.a('Function')
    })
  })

  describe('should throw error if there\'s no options', () => {
    it('init method', () => {
      expect(http.init).to.throw('http-utils: Missing Options');
    })
    it('get method', () => {
      expect(http.get).to.throw('http-utils: Missing Options');
    })
    it('post method', () => {
      expect(http.post).to.throw('http-utils: Missing Options');
    })
  })

  let endpoint = 'http://endpoint.test'
  let logger = { log: x => x }
  let request = { get: (opt, call) => call(), post: (opt, call) => call() }
  let sandbox = sinon.sandbox.create()
  http.init({ endpoint, logger, request })

  describe('should call request properly', () => {
    beforeEach(() => {
      sandbox.spy(request, 'get')
      sandbox.spy(request, 'post')
    })

    afterEach(() => {
      sandbox.restore()
    })

    it('get', () => {
      http.get({
        user: { login: 'nickname', pass: 'pass' },
        service: '/test-service'
      }, x => x)
      expect(request.get).to.have.been.calledWith({
        headers: {
          Authorization: 'Basic bmlja25hbWU6cGFzcw=='
        },
        url: 'http://endpoint.test/test-service'
      }, sinon.match.func)
    })

    it('post', () => {
      let body = {}
      http.post({
        body,
        user: { login: 'nickname', pass: 'pass' },
        service: '/test-service'
      }, x => x)

      expect(request.post).to.have.been.calledWith({
        form: body,
        headers: {
          Authorization: 'Basic bmlja25hbWU6cGFzcw=='
        },
        url: 'http://endpoint.test/test-service'
      }, sinon.match.func)
    })
  })

  describe('should call callback', () => {
    it('get', () => {
      let callback = sinon.spy()
      http.get({
        user: { login: 'nickname', pass: 'pass' },
        service: '/test-service'
      }, callback)
      expect(callback).to.have.been.called
    })

    it('post', () => {
      let callback = sinon.spy()
      http.post({
        form: {},
        user: { login: 'nickname', pass: 'pass' },
        service: '/test-service'
      }, callback)
      expect(callback).to.have.been.called
    })
  })

  describe('should call logger', () => {
    beforeEach(() => {
      sandbox.spy(logger, 'log')
    })

    afterEach(() => {
      sandbox.restore()
    })

    it('get', () => {
      http.get({
        form: {},
        user: { login: 'nickname', pass: 'pass' },
        service: '/test-service'
      }, x => x)
      expect(logger.log).to.have.been.called
    })

    it('post', () => {
      http.post({
        form: {},
        user: { login: 'nickname', pass: 'pass' },
        service: '/test-service'
      }, x => x)
      expect(logger.log).to.have.been.called
    })
  })
})