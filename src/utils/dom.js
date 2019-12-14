/**
 * dom元素是否有某个class
 * @param dom {HTMLElement} dom元素对象
 * @param className {String} class名称
 * @returns {boolean}
 */
function hasClass (dom, className) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(dom.className)
}
/**
 * 设置或者移除dom元素属性
 * @param dom {HTMLElement} dom元素对象
 * @param attr {String} 属性
 * @param value {String} 属性值
 */
function setAttribute (dom, attr, value) {
  value == null ? dom.removeAttribute(attr) : dom.setAttribute(attr, value)
}
/**
 * 设置页面body固定在顶部
 */
function fixedBody () {
  var a = document.body.scrollTop || document.documentElement.scrollTop
  document.body.style.cssText += 'position:fixed;top:-' + a + 'px;left:0;right:0'
}
/**
 * 取消设置页面body固定在顶部
 */
function looseBody () {
  var a = document.body
  a.style.position = ''
  var b = a.style.top
  document.body.scrollTop = document.documentElement.scrollTop = -parseInt(b)
  a.style.top = ''
}

module.exports = {
  hasClass: hasClass,
  setAttribute: setAttribute,
  fixedBody: fixedBody,
  looseBody: looseBody
}
