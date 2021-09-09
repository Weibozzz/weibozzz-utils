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
/**
 * 如果是 ios 返回 ios 版本数组 例如：14.2.3返回[14,2,3]
 * 移动端 ios 11以上(包含)如果引入 fastclick(300ms点击延迟) 会出现 textarea 首次进入多次点击不动的现象
 * @returns {string[]}
 */
function iosVersionArr() {
  if (!isIOS()) {
    throw new Error('不是ios')
  }
  const ua = navigator.userAgent.toLowerCase()
  return ua.match(/cpu iphone os (.*?) like mac os/)[1].split('_')
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
  isAndroid: isAndroid,
  iosVersionArr: iosVersionArr,
}
