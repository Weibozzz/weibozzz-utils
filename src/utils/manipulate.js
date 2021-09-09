/**
 * 安全取值函数
 var obj = { a: { b: { c: 2 } } }
 console.log(getIn(obj, 'a.b.c')) // output: 2
 console.log(getIn(obj, '.a.b.c')) // output: 2
 console.log(getIn(obj, ['a', 'b', 'c'])) // output: 2
 console.log(getIn(obj, ['a', 'b', 'c', 'd', 'e'], [])) // output: []
 console.log(getIn({ a: [{ b: 1 }] }, 'a[0].b', 3)) // output: 1
 * @param source {Object|Array} 取值目标对象
 * @param path {Array|String} 取值的数组
 * @param defaultValue {*} 如果取不到的默认值
 * @returns {*} 返回操作后的值
 */
function getIn (source, path, defaultValue) {
  const paths = Array.isArray(path) ? path
    : path.replace(/\[(\d+)\]/g, '.$1')
      .split('.')
      .filter(Boolean)
  let result = source
  for (const p of paths) {
    result = Object(result)[p]
    if (result == undefined) {
      return defaultValue
    }
  }
  return result
}
module.exports = {
  getIn: getIn,
}

/**
 * 安全设置一个对象
 * @param target {Object|Array} 设置的目标对象
 * @param arr {Array} 设置以数组表示
 * @param value {*} 设置的值
 * @returns {*} 返回操作后的值
 */
function setIn (target, arr, value) {
  var d = function setRecursively (target, arr, value, e) {
    var f = {},
      g = arr[e],
      h
    if (arr.length > e) {
      if (Array.isArray(target)) {
        f = target.slice(0)
      } else {
        f = {...target}
      }
      h = target[g] !== undefined ? target[g] : {}
      f[g] = d(h, arr, value, e + 1)
      return f
    }
    return value
  }
  return d(target, arr, value, 0)
}
/**
 * 安全删除对象的key
 * @param target {Object|Array} 删除的目标对象
 * @param arr {Array} 删除以数组表示
 * @returns {*} 返回操作后的值
 */
function deleteIn (target, arr) {
  var c = function deleteRecursively (target, arr, d) {
    var e = {},
      f = arr[d]
    if (typeof target !== 'object' || target[f] === undefined) {
      return target
    }
    if (arr.length - 1 !== d) {
      if (Array.isArray(target)) {
        e = target.slice()
      } else {
        e = {...target}
      }
      e[f] = c(target[f], arr, d + 1)
      return e
    }
    if (Array.isArray(target)) {
      e = [].concat(target.slice(0, f), target.slice(f + 1))
    } else {
      e = {...target}
      delete e[f]
    }
    return e
  }
  return c(target, arr, 0)
}
module.exports = {
  getIn: getIn,
  setIn: setIn,
  deleteIn: deleteIn
}
