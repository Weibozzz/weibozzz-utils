function getStorage (a) {
  var b = window.localStorage
  if (!b.getItem(a)) return null
  var c = JSON.parse(b.getItem(a))
  var d = c.__count
  var e = c.value,
    f = c.__expired
  if (new Date().getTime() <= f && d > 0) {
    d--
    c.__count = d
    b.setItem(a, JSON.stringify(c))
    return e
  } else {
    return null
  }
}
function setStorage (a, b) {
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
  var d = window.localStorage
  var e = 1
  var f = 100
  var g = c.expired,
    h = g === undefined ? 1 : g,
    i = c.count,
    j = i === undefined ? 100 : i
  var k = { value: b, __expired: new Date().getTime() + 86400000 * h, __count: j }
  d.setItem(a, JSON.stringify(k))
  return k
}
