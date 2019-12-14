/**
 * 取值 如果过期或者使用100次后取值为空
 * @param key {String} 取值key
 * @param isLimit {Boolean} 是否限制过期和使用次数
 * @returns {null|value}
 */
function getStorage (key, isLimit = false) {
  var localStorage = window.localStorage
  if (!localStorage.getItem(key)) return null
  var valObj = JSON.parse(localStorage.getItem(key))
  var {value, __count, __expired} = valObj;
  if(!isLimit){
    return value;
  }
  if (new Date().getTime() <= __expired && __count > 0) {
    __count--
    valObj.__count = __count
    localStorage.setItem(key, JSON.stringify(valObj))
    return value
  } else {
    return null
  }
}
/**
 * 带有过期时间和使用限制的本地存储
 * @param key {String} 存值的 key
 * @param value {Any}  存值的 value
 * @param rest {Object:{__count: 100,__expired:1}}
 * 额外参数，默认存储1天，使用100次,不会自动删除，只是在取值的时候有所扩展
 * @returns {{__count: number, value: *, __expired: number}}
 */
function setStorage (key, value, rest = {}) {
  var localStorage = window.localStorage
  var {expired = 1, count = 100} = rest;
  var result = {
    value: value,
    __expired: new Date().getTime() + 86400000 * expired,
    __count: count
  }
  localStorage.setItem(key, JSON.stringify(result))
  return result
}

module.exports = {
  getStorage: getStorage,
  setStorage: setStorage
}
