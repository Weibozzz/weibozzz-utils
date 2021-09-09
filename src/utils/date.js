/**
 * 返回当前时间年月日
 * [暂未测试]ios new Date('2020-07-11T03:29:29Z') 不兼容 ios 只可以转义 / 不能转义 -
 * @returns {{date: number, s: number, month: number, year: number, h: number, m: number}}
 */
export function getDateObj (str) {
  let dateData = str ? new Date(str) : new Date()
  let year = dateData.getFullYear()
  let month = dateData.getMonth() + 1
  let date = dateData.getDate()
  let h = dateData.getHours()
  let m = dateData.getMinutes()
  let s = dateData.getSeconds()
  return { year, month, date, h, m, s }
}
module.exports = {
  getDateObj: getDateObj,
}
