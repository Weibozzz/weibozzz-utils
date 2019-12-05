const is = require('./is')
const debounce = require('./debounce')
const throttle = require('./throttle')
module.exports = {
  ...is,
  debounce,
  throttle
}
