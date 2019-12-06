var isObj = require('./is').isObject
function parse (a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
  a = a || window.location.href
  var c = a.split('?')[1]
  var d = function replaceHandler (a, c) {
    return a === '' ? c : b ? decodeURIComponent(c) : c
  }
  return c ? JSON.parse('{"' + c.replace(/&/g, '","')
    .replace(/=/g, '":"') + '"}', d) : {}
}
function toUrl (a) {
  if (!a || !isObj(a)) {
    return ''
  }
  return Object.keys(a)
    .reduce(function (b, c, d) {
      return '' + b + (d ? '&' : '') + c + '=' + a[c]
    }, '?')
}
function getQueryString (a, b) {
  var c = new RegExp('(^|&)' + a + '=([^&]*)(&|$)', 'i')
  var d = window.location.search.substr(1)
    .match(c)
  if (d != null) {
    return b ? decodeURIComponent(d[2]) : d[2]
  }
  return null
}
function hasEncoded (a) {
  if (!a) return true
  var b = decodeURIComponent(a)
  return b !== a
}
