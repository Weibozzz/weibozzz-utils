## 未完成编写
- dom.js
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

### url

#### 1.parse

解析url字符串为对象

**parse (href =  window.location.href, isDecode = false)**

`@returns {object} 解析url字符串的对象`

- `href` <String> url字符串
- `isDecode` <Boolean> 是否需要解码 默认false

#### 2.toUrl

传入要转换的对象，返回url字符串

**toUrl (urlObj)**

`@returns {string} 转换后的url字符串`

- `urlObj` <Object> url对象
- 

#### 3.getQueryString

通过 key 获取 url 参数值

**getQueryString (key, isDecode)**

`@returns {string|null}`

- `key` <String> 要获取的key
- `isDecode` <Boolean> 是否需要解码

### storage
> 本地存储的封装

#### 1.setStorage
带有过期时间和使用限制的本地存储

**setStorage (key, value, rest = {}**

`@returns {{__count: number, value: *, __expired: number}}`

- key {String} 存值的 key
- value {Any}  存值的 value
- rest {Object:{__count: 100,__expired:1}} 
  额外参数，默认存储1天，使用100次,不会自动删除，只是在取值的时候有所扩展

#### 2.getStorage
取值 如果过期或者使用100次后取值为空

`@returns {null|value}`

**getStorage (key, isLimit = false)**

- key {String} 取值key
- isLimit {Boolean} 是否限制过期和使用次数

### compose
整合函数，避免多次嵌套,详细了解看下方链接

https://weibozzz.github.io/#/./docs/Redux/redux_v3.7.2%E6%BA%90%E7%A0%81%E8%AF%A6%E7%BB%86%E8%A7%A3%E8%AF%BB%E4%B8%8E%E5%AD%A6%E4%B9%A0%E4%B9%8Bcompose

`@returns {*|*|(function(...[*]): *)|(function(*): *)}`

- funcs {Function} 多个函数作为参数

### manipulate
对象的安全操作
#### getIn
安全取值函数

`@returns {*} 返回操作后的值`

- target {Object|Array} 取值目标对象
- arr {Array} 取值的数组
- defaultValue {*} 如果取不到的默认值

#### setIn
安全设置一个对象

`@returns {*} 返回操作后的值`

- target {Object|Array} 设置的目标对象
- arr {Array} 设置以数组表示
- value {*} 设置的值

#### deleteIn
安全删除对象的key

`@returns {*} 返回操作后的值`

- target {Object|Array} 删除的目标对象
- arr {Array} 删除以数组表示
