> 面试中经常会遇到的手写代码系列

### 函数防抖(debounce)

概念:在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。

```js
function debounce (fn, wait) {
  let timer = null;
  return function () {
    const ctx = this;
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(function () {
      fn.call(ctx)
    }, wait)
  }
}
window.onscroll = debounce(function () {
  console.log('执行滚动')
}, 1000)
```

### 函数节流 throttle

概念： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

```js
function throttle (fn, wait) {
  let lastTime = + new Date();
  return function () {
    let nowTime = + new Date();
    if (nowTime - lastTime >= wait) {
      fn.call(this);
      lastTime = nowTime
    }
  }
}
window.onscroll = throttle(function () {
  console.log('执行了滚动')
}, 5000)
```

### 手写 promise

[剖析 Promise 内部结构，一步一步实现一个完整的、能通过所有 Test case 的 Promise 类 ](https://github.com/xieranmaya/blog/issues/3)
[完整代码](https://github.com/xieranmaya/Promise3/blob/master/Promise3.js)

### 数组降维

[优雅的数组降维——Javascript 中 apply 方法的妙用](https://www.cnblogs.com/front-end-ralph/p/4871332.html)

```js
  arr.flat(Infinity)
  Array.prototype.concat([], arr)
```
### 数组乱序

[JavaScript 数组乱序](https://github.com/hanzichi/underscore-analysis/issues/15)

Fisher–Yates Shuffle（洗牌算法）:其实它的思想非常的简单，遍历数组元素，将其与之前的任意元素交换。因为遍历有从前向后和从后往前两种方式，所以该算法大致也有两个版本的实现。

```js
// 从前往后
function shuffle(arr) {
  let len = arr.length;
  let set = Array(len);
  for(let i = 0; i < len; i ++) {
    rand = ~~(Math.random() * (i + 1))
    if (i !== rand) set[i] = set[rand]
    set[rand] = arr[i]
  }
  return set
}

// 从后往前
function Shuffle(arr) {
  let len = arr.length;
  for(let i = len - 1; i >= 0; i --) {
    rand = ~~(Math.random() * (i + 1))
    if (i !== rand) {
      let temp = arr[rand];
      arr[rand] = arr[i];
      arr[i] = temp;
    }
  }
  return arr
}
```

### 实现 bind

[bind 方法的兼容实现](https://github.com/hanzichi/underscore-analysis/issues/19)

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function (ctx) {
    const args = arguments;
    return function () {
      this.apply(ctx, [].slice.call(args, 1))
    }
  }
}
func.bind(that, arg1, arg2)();
```

### js 实现千位分隔符

描述：数字的千位分隔符表示法，比如`126186312`转化为`126,186,312`。这个题目主要考察正则表达式，用正则可以很方便的进行字符串转化

```js
'126186312'.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
```

### 驼峰和下划线命名互转

```js
// 下划线->驼峰
function toHump(str) {
  return str.replace(/_(\w)/g, (all, letter) => {
    return letter.toUpperCase();
  })
}
// 驼峰->下划线
function toLine(str) {
  return str.replace(/[A-Z]/g, '_$1')
}
```

### 封装new函数
```js
function _new(fn) {
  var obj = Object.create(fn.prototype);
  var ret = fn.call(obj)
  return typeof ret === 'object' ? ret : obj;//确保构造器总是返回一个对象
};
```

### 深拷贝
```js
function deepClone(obj) {
  if (!isObj(obj)) {
    return obj
  }
  const target = Array.isArray(obj)? []: {};
  for(let k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (isObj(obj[k])) {
        target[k] = deepClone(obj[k])
      } else {
        target[k] = obj[k]
      }
    }
  }
  return target
}
function isObj(obj) {
  return Object.prototype.toString().call(obj) === '[object object]';
}
```