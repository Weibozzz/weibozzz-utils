"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 安全取值函数
 * @param target {Object|Array} 取值目标对象
 * @param arr {Array} 取值的数组
 * @param defaultValue {*} 如果取不到的默认值
 * @returns {*} 返回操作后的值
 */
function getIn(target, arr, defaultValue) {
  for (var e = 0; e < arr.length; e++) {
    if (_typeof(target) !== 'object' || target === null) {
      return defaultValue;
    }

    var f = arr[e];
    target = target[f];
  }

  if (target === undefined) {
    return defaultValue;
  }

  return target;
}
/**
 * 安全设置一个对象
 * @param target {Object|Array} 设置的目标对象
 * @param arr {Array} 设置以数组表示
 * @param value {*} 设置的值
 * @returns {*} 返回操作后的值
 */


function setIn(target, arr, value) {
  var d = function setRecursively(target, arr, value, e) {
    var f = {},
        g = arr[e],
        h;

    if (arr.length > e) {
      if (Array.isArray(target)) {
        f = target.slice(0);
      } else {
        f = _objectSpread({}, target);
      }

      h = target[g] !== undefined ? target[g] : {};
      f[g] = d(h, arr, value, e + 1);
      return f;
    }

    return value;
  };

  return d(target, arr, value, 0);
}
/**
 * 安全删除对象的key
 * @param target {Object|Array} 删除的目标对象
 * @param arr {Array} 删除以数组表示
 * @returns {*} 返回操作后的值
 */


function deleteIn(target, arr) {
  var c = function deleteRecursively(target, arr, d) {
    var e = {},
        f = arr[d];

    if (_typeof(target) !== 'object' || target[f] === undefined) {
      return target;
    }

    if (arr.length - 1 !== d) {
      if (Array.isArray(target)) {
        e = target.slice();
      } else {
        e = _objectSpread({}, target);
      }

      e[f] = c(target[f], arr, d + 1);
      return e;
    }

    if (Array.isArray(target)) {
      e = [].concat(target.slice(0, f), target.slice(f + 1));
    } else {
      e = _objectSpread({}, target);
      delete e[f];
    }

    return e;
  };

  return c(target, arr, 0);
}

module.exports = {
  getIn: getIn,
  setIn: setIn,
  deleteIn: deleteIn
};