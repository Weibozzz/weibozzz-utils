function hasClass (a, b) {
  return new RegExp('(\\s|^)' + b + '(\\s|$)').test(a.className)
}
function setAttribute (a, b, c) {
  c == null ? a.removeAttribute(b) : a.setAttribute(b, c)
}
function fixedBody () {
  var a = document.body.scrollTop || document.documentElement.scrollTop
  document.body.style.cssText += 'position:fixed;top:-' + a + 'px;left:0;right:0'
}
function looseBody () {
  var a = document.body
  a.style.position = ''
  var b = a.style.top
  document.body.scrollTop = document.documentElement.scrollTop = -parseInt(b)
  a.style.top = ''
}
