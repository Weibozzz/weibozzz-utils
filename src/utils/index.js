const is = require('./is')
const debounce = require('./debounce')
const throttle = require('./throttle')
const compose = require('./compose')
const manipulate = require('./manipulate')
const url = require('./url')
const storage = require('./storage')
const dom = require('./dom')
const date = require('./date')
const others = require('./others')
module.exports = {
  ...is,
  debounce,
  throttle,
  compose,
  ...manipulate,
  ...url,
  ...storage,
  ...dom,
  ...date,
  ...others,
}
