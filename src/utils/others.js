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
/**
 * 下载 blob 对象
 * 注意：处理 blob 请求头 responseType: "blob"
 * @param res 需要为请求的原始数据，包括 headers
 * @param options 可为空 https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 */
function downLoadBlob(res, options) {
  const params = options ? [[res.data], options] : [[res.data]];
  const blob = new Blob(...params);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const fileName = res.headers["content-disposition"]
    .match(/filename=(.*)/)[1].replace(/"|'/g, "");
  a.href = url;
  a.download = decodeURI(fileName);
  a.click();
}

module.exports = {
  usefulObj: usefulObj,
  downLoadBlob: downLoadBlob,
}
