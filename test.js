/*!
 * is-emitter <https://github.com/tunnckoCore/is-emitter>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('assertit')
var isStream = require('is-stream')
var isEmitter = require('./index')

// emitters
var Dush = require('dush')
var Emitter = require('events').EventEmitter
var DualEmitter = require('dual-emitter')
var EventEmitter2 = require('eventemitter2').EventEmitter2
var EventEmitter3 = require('eventemitter3')
var ComponentEmitter = require('component-emitter')

test('should return `true` emitters, even for most basic emitters', function () {
  test.strictEqual(isEmitter(process), true)
  test.strictEqual(isEmitter(new Dush()), true)
  test.strictEqual(isEmitter(new Emitter()), true)
  test.strictEqual(isEmitter(new DualEmitter()), true)
  test.strictEqual(isEmitter(new EventEmitter2()), true)
  test.strictEqual(isEmitter(new EventEmitter3()), true)
  test.strictEqual(isEmitter(new ComponentEmitter()), true)
})

test('should return `true` for streams', function (done) {
  test.strictEqual(isStream(process.stdout), true)
  test.strictEqual(isEmitter(process.stdout), true)
  test.strictEqual(isEmitter(process.stdin), true)
  test.strictEqual(isEmitter(fs.createReadStream('./index.js')), true)
  done()
})

test('should return `false` otherwise', function (done) {
  function Func () {}
  test.strictEqual(isEmitter(function () {}), false)
  test.strictEqual(isEmitter(['a']), false)
  test.strictEqual(isEmitter(1234), false)
  test.strictEqual(isEmitter({foo: 'bar'}), false)
  test.strictEqual(isEmitter(new Func()), false)
  done()
})
