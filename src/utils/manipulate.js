'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var _assign = require('babel-runtime/core-js/object/assign')
var _assign2 = _interopRequireDefault(_assign)
exports.getIn = getIn
exports.setIn = setIn
exports.deleteIn = deleteIn
exports.compose = compose
var _is = require('./is')
function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
function getIn (a, b, c) {
  var d = (0, _assign2.default)({}, a)
  for (var e = 0; e < b.length; e++) {
    if (typeof d !== 'object' || d === null) {
      return c
    }
    var f = b[e]
    d = d[f]
  }
  if (d === undefined) {
    return c
  }
  return d
}
function setIn (a, b, c) {
  var d = function setRecursively (a, b, c, e) {
    var f = {},
      g = b[e],
      h = void 0
    if (b.length > e) {
      if (Array.isArray(a)) {
        f = a.slice(0)
      } else {
        f = (0, _assign2.default)({}, a)
      }
      h = a[g] !== undefined ? a[g] : {}
      f[g] = d(h, b, c, e + 1)
      return f
    }
    return c
  }
  return d(a, b, c, 0)
}
function deleteIn (a, b) {
  var c = function deleteRecursively (a, b, d) {
    var e = {},
      f = b[d]
    if (typeof a !== 'object' || a[f] === undefined) {
      return a
    }
    if (b.length - 1 !== d) {
      if (Array.isArray(a)) {
        e = a.slice()
      } else {
        e = (0, _assign2.default)({}, a)
      }
      e[f] = c(a[f], b, d + 1)
      return e
    }
    if (Array.isArray(a)) {
      e = [].concat(a.slice(0, f), a.slice(f + 1))
    } else {
      e = (0, _assign2.default)({}, a)
      delete e[f]
    }
    return e
  }
  return c(a, b, 0)
}
function compose (a) {
  a.reduce(function (a, b) {
    if ((0, _is.isFunc)(b)) {
      return b(a)
    }
    if ((0, _is.isArray)(b) && (0, _is.isFunc)(b[0])) {
      return b[0].apply(b, [a].concat(b.slice(1)))
    }
    return a
  })
}
