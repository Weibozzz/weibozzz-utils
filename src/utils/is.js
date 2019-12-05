const isArray = Array.isArray || function a (b) {
  return Object.prototype.toString.call(b) === '[object Array]'
}
function isObject (a) {
  return Object.prototype.toString.call(a) === '[object Object]'
}
function isString (a) {
  return Object.prototype.toString.call(a) === '[object String]'
}
function isPromise (a) {
  return !!a && typeof a.then === 'function'
}
function isFunc (a) {
  return Object.prototype.toString.call(a) === '[object Function]'
}
function isEmptyObject (a) {
  if (!isObject(a)) {
    return false
  }
  return !Object.keys(a).length
}
function canParseJson (a) {
  try {
    return JSON.parse(a)
  } catch (a) {
    return false
  }
}
function isTelNum (a) {
  return a && /^1\d{10}$/.test(a)
}
function isIOS () {
  return /iPhone|iTouch|iPad/i.test(navigator.userAgent)
}
function isAndroid () {
  return /android/i.test(navigator.userAgent)
}
module.exports = {
  isArray: isArray,
  isObject: isObject,
  isString: isString,
  isEmptyObject: isEmptyObject,
  isFunc: isFunc,
  isPromise: isPromise,
  canParseJson: canParseJson,
  isTelNum: isTelNum,
  isIOS: isIOS,
  isAndroid: isAndroid
}
