'use strict'

const chai = require('chai')
const expect = chai.expect
const http = require('../http-utils')


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
  describe('should be configurable', () => {
    describe('init', () => {
    })
  })
  describe('should call request properly', () => {
    describe('get', () => {
    })
    describe('post', () => {
    })
  })

  describe('should call request properly', () => {
    describe('get', () => {
    })
    describe('post', () => {
    })
  })
})
