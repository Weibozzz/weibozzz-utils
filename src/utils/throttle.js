/**
 * 用于限制 fn 函数在 period 时间段内只调用一次，即限制 fn 调用的频率
 * 示例中实现了首次和末次一定会被调用，中间调用被限定为一定频率
 *
 * @param {Function} fn 要被节流的函数
 * @param {number} [period=200] 被节流的时间段
 * @returns 一个匿名函数包装
 */
function throttle (fn, period=200) {
  let _lastTime = null
  let _timer = null
  return function (...args) {
    const _nowTime = +new Date()

    _timer && clearTimeout(_timer)

    if (!_lastTime || _nowTime - _lastTime > period) {
      fn.apply(this, args)
      _lastTime = _nowTime
    } else {
      // 确保最后一次即使不满足 period 时间段，但仍会调用
      // 使用箭头函数来确保 this 不变
      _timer = setTimeout(() => {
        fn.apply(this, args)
      }, period)
    }
  }
}

module.exports = throttle
