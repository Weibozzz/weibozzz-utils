"use strict";

/**
 * 整合函数，避免多次嵌套,详细了解看下方链接
 * https://weibozzz.github.io/#/./docs/Redux/redux_v3.7.2%E6%BA%90%E7%A0%81%E8%AF%A6%E7%BB%86%E8%A7%A3%E8%AF%BB%E4%B8%8E%E5%AD%A6%E4%B9%A0%E4%B9%8Bcompose
 * @param funcs {Function} 多个函数
 * @returns {*|*|(function(...[*]): *)|(function(*): *)}
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (args) {
      return args;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return b(a.apply(void 0, arguments));
    };
  });
}

module.exports = compose;