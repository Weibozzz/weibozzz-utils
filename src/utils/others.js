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
 * type https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 * @param res 需要为请求的原始数据，包括 headers
 */
function downLoadBlob(res) {
  const { data, type } = res || {}
  try {
    const params = type ? [[data], { type }] : [[res.data]];
    const blob = new Blob(...params);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const fileName = getXHRFileName(res.headers["content-disposition"])
    a.href = url;
    a.download = decodeURI(fileName);
    a.click();
  } catch (error) {
    console.error(error);
  }
}

function getXHRFileName(disposition){
  const utf8FilenameRegex = /filename\*=UTF-8''([\w%\-\.]+)(?:; ?|$)/i;
  const asciiFilenameRegex = /^filename=(["']?)(.*?[^\\])\1(?:; ?|$)/i;

  let fileName = null;
  if (utf8FilenameRegex.test(disposition)) {
    fileName = decodeURIComponent(utf8FilenameRegex.exec(disposition)[1]);
  } else {
    // prevent ReDos attacks by anchoring the ascii regex to string start and
    //  slicing off everything before 'filename='
    const filenameStart = disposition.toLowerCase().indexOf('filename=');
    if (filenameStart >= 0) {
      const partialDisposition = disposition.slice(filenameStart);
      const matches = asciiFilenameRegex.exec(partialDisposition );
      if (matches != null && matches[2]) {
        fileName = matches[2];
      }
    }
  }
  return fileName;
}
/**
 * 分批执行函数，防止dom更新过慢
 * @param num 总条数
 * @param patch 每一批的数量
 * @param timer 间隔时间
 * @param callBack 每一次执行回调
 * @returns {Promise<void>}
 */
export async function patchCallBack (num, patch, timer = 100, callBack = () => {}) {
  if (patch === 0) return
  const count = Math.ceil(num / patch)
  let i = -1
  const fn = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        i++
        callBack(i, patch)
        resolve()
      }, timer)
    })
  }
  for (let i = 0; i < count; i++) {
    await fn()
  }
}

module.exports = {
  patchCallBack: patchCallBack,
  usefulObj: usefulObj,
  downLoadBlob: downLoadBlob,
}
