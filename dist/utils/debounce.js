"use strict";

/**
 * @param  {Function} fn     要实现函数防抖的原函数
 * @param  {Number}   wait  延迟时间
 * @param  {Boolean}   now   是否第一次立即调用后启用防抖 默认true
 * @return {Function}        添加防抖功能的包装函数
 */
// 最后一次调用总是会被执行
function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
  var now = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var __timer = null;
  var isFirst = now;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (__timer) clearTimeout(__timer);

    if (isFirst) {
      fn.apply(this, args);
      isFirst = false;
    } else {
      __timer = setTimeout(function () {
        fn.apply(_this, args);
      }, wait);
    }
  };
}

module.exports = debounce;