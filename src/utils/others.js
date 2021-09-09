/**
 * 去除无用的obj 例如 {b:null,c:undefined} 变为 {}
 * @param value
 * @returns {{}}
 */
function usefulObj (value = {}) {
  let result = {}
  for (let key in value) {
    const val = value[key]
    if (val != null) {
      result[key] = val
    }
  }
  return result
}

module.exports = {
  usefulObj: usefulObj,
}
