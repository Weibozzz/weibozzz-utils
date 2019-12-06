## 未完成编写
- dom.js
- storage.js
- url.js
- manipulate.js
## weibozzz
个人常用工具库

```bash
npm install weibozzz  -S
```
支持 `require import` 导入
## utils
工具库
### is
```js
module.exports = {
  isArray: isArray,
  isObject: isObject,
  isString: isString,
  isEmptyObject: isEmptyObject,
  isFunc: isFunc,
  isPromise: isPromise,
  canParseJson: canParseJson,
  isTelNum: isTelNum,
  isIOS: isIOS,
  isAndroid: isAndroid
}

```
#### usage

```js
import * as is from 'weibozzz/dist/utils/is'
```

### debounce 应用场景
- 每次 `resize/scroll` 触发统计事件
- 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）

#### usage

```js
import debounce from 'weibozzz/dist/utils/debounce'
```

**debounce(fn, wait = 800, now = true)**

`@return {Function}        添加防抖功能的包装函数`

- `fn` <Function> 要实现函数防抖的原函数
- `wait` <Number> 延迟时间 默认800ms，单位`ms`
- `now` <Boolean> 是否第一次立即调用后启用防抖 默认 `true`

### throttle 应用场景

- `DOM` 元素的拖拽功能实现（`mousemove`）
- 射击游戏的 `mousedown/keydown` 事件（单位时间只能发射一颗子弹）
- 计算鼠标移动的距离（`mousemove`）
- Canvas 模拟画板功能（`mousemove`）
- 搜索联想（`keyup`）
- 监听滚动事件判断是否到页面底部自动加载更多：给 `scroll` 加了 `debounce` 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 `throttle` 的话，只要页面滚动就会间隔一段时间判断一次

#### usage

```js
import throttle from 'weibozzz/dist/utils/throttle'
```

**throttle(fn, wait = 800, now = true)**

`@returns 一个匿名函数包装`

- `fn` <Function> 要被节流的函数
- `period` <Number> 被节流的时间段默认200ms，单位`ms`
