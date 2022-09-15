const { assert } = require('chai')
const { parseHost, parsePort } = require('../../src/utils')

describe('utils.js', function () {
  describe('parseHost', function () {
    const inputs = []
    const expected = []
    const actual = inputs.map(parseHost)

    it('should return the valid host', function () {
      assert.deepEqual(actual, expected)
    })
  })

  describe('parsePort', function () {
    const inputs = ['8789', 88888888, -5, 'foo', '23.3', '2p', 55.1, 88]
    const expected = [8789, 8080, 8080, 8080, 8080, 8080, 8080, 88]
    const actual = inputs.map(parsePort)

    it('should return the valid port', function () {
      assert.deepEqual(actual, expected)
    })
  })
})
