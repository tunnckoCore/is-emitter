/*!
 * is-emitter <https://github.com/tunnckoCore/is-emitter>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isRealObject = require('is-real-object')

module.exports = function isEmitter (val) {
  return isRealObject(val) &&
    typeof val.on === 'function' &&
    typeof val.emit === 'function'
}
