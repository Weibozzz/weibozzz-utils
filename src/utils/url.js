var isObj = require('./is').isObject
/**
 * 解析url字符串为对象
 * @param href {String} url字符串
 * @param isDecode {Boolean} 是否需要解码 默认false
 * @returns {{}}
 */
function parse (href =  window.location.href, isDecode = false) {
  var urlParams = href.split('?')[1]
  /** 经过一次转换后才将被最终返回（返回值）
   *  文档 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
   * @param item 输出当前的属性名，从而得知遍历顺序是从内向外的
   * @param result 返回原始属性值，相当于没有传递 reviver 参数
   * @returns {string}
   */
  var transData = function replaceHandler (item, result) {
    return item === '' ? result : isDecode ? decodeURIComponent(result) : result
  }
  return urlParams ? JSON.parse('{"' +
    urlParams
    .replace(/&/g, '","')
    .replace(/=/g, '":"')
    + '"}', transData) : {}
}

/**
 * 传入要转换的对象，返回url字符串
 * @param {Object} urlObj url对象
 * @returns {string} 转换后的url字符串
 */
function toUrl (urlObj) {
  if (!urlObj || !isObj(urlObj)) {
    return ''
  }
  return Object.keys(urlObj)
    .reduce((total, item, index) => {
      total += `${index ? '&' : '' }${item}=${urlObj[item]}`
      return total;
    },'?')
}
/**
 * 通过 key 获取 url 参数值
 * @param {String} key 要获取的key
 * @param {Boolean} isDecode 是否需要解码
 * @returns {string|null}
 */
function getQueryString (key, isDecode) {
  var regExp = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
  var matchArr = window.location.search.substr(1)
    .match(regExp)
  if (matchArr != null) {
    return isDecode ? decodeURIComponent(matchArr[2]) : matchArr[2]
  }
  return null
}
