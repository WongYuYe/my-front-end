### JavaScript 的组成

JavaScript 由以下三部分组成：

- ECMAScript（核心）：JavaScript 语言基础
- DOM（文档对象模型）：规定了访问 HTML 和 XML 的接口
- BOM（浏览器对象模型）：提供了浏览器窗口之间进行交互的对象和方法

### JS 的基本数据类型和引用数据类型

- 基本数据类型：undefined、null、boolean、number、string、symbol
- 引用数据类型：object、array、function

### 检测浏览器版本版本有哪些方式？

- 根据 navigator.userAgent // UA.toLowerCase().indexOf('chrome')
- 根据 window 对象的成员 // 'ActiveXObject' in window

### 介绍 JS 有哪些内置对象？

- 数据封装类对象：Object、Array、Boolean、Number、String
- 其他对象：Function、Arguments、Math、Date、RegExp、Error、JSON
- ES6 新增对象：Symbol、Map、Set、Promises、Proxy、Reflect

### 如何编写高性能的 JavaScript？

- 遵循严格模式："use strict";
- 将 js 脚本放在页面底部，加快渲染页面
- 将 js 脚本将脚本成组打包，减少请求
- 使用非阻塞方式下载 js 脚本
- 尽量使用局部变量来保存全局变量
- 尽量减少使用闭包
- 使用 window 对象属性方法时，省略 window
- 尽量减少对象成员嵌套
- 缓存 DOM 节点的访问
- 通过避免使用 eval() 和 Function() 构造器
- 给 setTimeout() 和 setInterval() 传递函数而不是字符串作为参数
- 尽量使用直接量创建对象和数组
- 最小化重绘(repaint)和回流(reflow)

### DOM 元素 e 的 e.getAttribute(propName)和 e.propName 有什么区别和联系

- e.getAttribute()，是标准 DOM 操作文档元素属性的方法，具有通用性可在任意文档上使用，返回元素在源文件中设置的属性
- e.propName 通常是在 HTML 文档中访问特定元素的特性，浏览器解析元素后生成对应对象（如 a 标签生成 HTMLAnchorElement），这些对象的特性会根据特定规则结合属性设置得到，对于没有对应特性的属性，只能使用 getAttribute 进行访问
- e.getAttribute()返回值是源文件中设置的值，类型是字符串或者 null（有的实现返回""）
- e.propName 返回值可能是字符串、布尔值、对象、undefined 等
- 大部分 attribute 与 property 是一一对应关系，修改其中一个会影响另一个，如 id，title 等属性
- 一些布尔属性`<input hidden/>`的检测设置需要 hasAttribute 和 removeAttribute 来完成，或者设置对应 property
- 像`<a href="../index.html">link</a>`中 href 属性，转换成 property 的时候需要通过转换得到完整 URL
- 一些 attribute 和 property 不是一一对应如：form 控件中`<input value="hello"/>`对应的是 defaultValue，修改或设置 value property 修改的是控件当前值，setAttribute 修改 value 属性不会改变 value property

### offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别

- clientWidth/clientHeight 返回值只包含 content + padding，如果有滚动条，也不包含滚动条
- offsetWidth/offsetHeight 返回值包含 content + padding + border，效果与 e.getBoundingClientRect()相同
- scrollWidth/scrollHeight 返回值包含 content + padding + 溢出内容的尺寸，不包括border，如果有滚动条，也不包含滚动条

### 描述浏览器的渲染过程，DOM 树和渲染树的区别？

浏览器的渲染过程：

- 解析 HTML 构建 DOM(DOM 树)，并行请求 css/image/js
- CSS 文件下载完成，开始构建 CSSOM(CSS 树)
- CSSOM 构建结束后，和 DOM 一起生成 Render Tree(渲染树)
- 布局(Layout)：计算出每个节点在屏幕中的位置
- 显示(Painting)：通过显卡把页面画到屏幕上

DOM 树 和 渲染树 的区别：

- DOM 树与 HTML 标签一一对应，包括 head 和隐藏元素
- 渲染树不包括 head 和隐藏元素，大段文本的每一个行都是独立节点，每一个节点都有对应的 css 属性

### 重绘和回流（重排），以及如何最小化？

- 重绘：当渲染树中的元素外观（如：颜色）发生改变，不影响布局时，产生重绘
- 回流：当渲染树中的元素布局（如：尺寸、位置、隐藏/状态状态）发生改变时，产生重绘回流
- 注意：JS 获取 Layout 属性值（如：offsetLeft、scrollTop、getComputedStyle 等）也会引起回流。因为浏览器需要通过回流计算最新值
- 回流必将引起重绘，而重绘不一定会引起回流

最小化操作
- 需要要对元素进行复杂的操作时，可以先隐藏(display:"none")，操作完成后再显示
- 需要创建多个 DOM 节点时，使用 DocumentFragment 创建完后一次性的加入 document
- 缓存 Layout 属性值，如：var left = elem.offsetLeft; 这样，多次使用 left 只产生一次回流
- 尽量避免用 table 布局（table 元素一旦触发回流就会导致 table 里所有的其它元素回流）
- 避免使用 css 表达式(expression)，因为每次调用都会重新计算值（包括加载页面）
- 尽量使用 css 属性简写，如：用 border 代替 border-width, border-style, border-color
- 批量修改元素样式：elem.className 和 elem.style.cssText 代替 elem.style.xxx

### 解释 JavaScript 变量声明提升？

- 在 JavaScript 中，函数声明与变量声明经常被 JavaScript 引擎隐式地提升到当前作用域的顶部。
- 声明语句中的赋值部分并不会被提升，只有名称被提升
- 函数声明的优先级高于变量，如果变量名跟函数名相同且未赋值，则函数声明会覆盖变量声明
- 如果函数有多个同名参数，那么最后一个参数（即使没有定义）会覆盖前面的同名参数

### 介绍 JavaScript 的原型，原型链？有什么特点？

原型：

- JavaScript 的所有对象中都包含了一个 [proto] 内部属性，这个属性所对应的就是该对象的原型
- JavaScript 的函数对象，除了原型 [proto] 之外，还预置了 prototype 属性
- 当函数对象作为构造函数创建实例时，该 prototype 属性值将被作为实例对象的原型 [proto]。

```js
function Person() {}
Person.prototype.name = 'su'
Person.prototype.age = 18
var person1 = new Person()
console.log(person1.__proto__)  // Person{ name: 'su', age: 18 }
console.log(Person.prototype)   // Person{ name: 'su', age: 18 }
console.log(person1.__proto__ === Person.prototype)   // true
```

原型链：

- 当一个对象调用的属性/方法自身不存在时，就会去自己 [proto] 关联的前辈 prototype 对象上去找
- 如果没找到，就会去该 prototype 原型 [proto] 关联的前辈 prototype 去找。依次类推，直到找到属性/方法或 undefined 为止。从而形成了所谓的“原型链”

原型特点：

- JavaScript 对象是通过引用来传递的，当修改原型时，与之相关的对象也会继承这一改变

### JavaScript 有几种类型的值？，你能画一下他们的内存图吗

- 原始数据类型（Undefined，Null，Boolean，Number、String, Symbol）-- 栈
- 引用数据类型（对象、数组和函数）-- 堆
- 两种类型的区别是：存储位置不同：
- 原始数据类型是直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据；
- 引用数据类型存储在堆(heap)中的对象，占据空间大、大小不固定，如果存储在栈中，将会影响程序运行的性能；
- 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。
- 当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

![avatar](https://img.jbzj.com/file_images/article/201708/201708250850131.png)

### JavaScript 如何实现一个类，怎么实例化这个类？

- 工厂模式
```js
function createObj(name, age) {
  var o = {
    name,
    age,
    sayName: function() {
      console.log(this.name)
    }
  }
  return o
}

var obj = createObj('susu', 18)
```

- 构造函数
```js
function CreateObj(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(this.name)
  }
}
var obj = new CreateObj('susu', 18)

```

- 原型模式
```js
function CreateObj() {}
CreateObj.prototype.name = "susu";
CreateObj.prototype.age = 18;
CreateObj.prototype.sayName = function() {
  console.log(this.name)
}
var obj = new CreateObj()
```

- 组合模式
```js
function CreateObj(name, age) {
  this.name = name;
  this.age = age;
}
CreateObj.prototype.sayName = function () {
  console.log(this.name)
}
var obj = new CreateObj('susu', 18)
```

- 动态原型模式
```js
function CreateObj(name, age) {
  this.name = name;
  this.age = age;
  // 只会在初次调用函数时创建
  if (typeof this.sayName !== 'function') {
    CreateObj.prototype.sayName = function() {
      console.log(this.name)
    }
  }
}
var obj = new CreateObj('susu', 18)
```

### Javascript 如何实现继承？

- 构造函数继承：可以向父类传递参数，继承父类的属性，但是无法继承方法。无法是实现函数复用，实例只是子类的实例，并非父类
```js
function SuperType() {
  this.colors = ['red','blue']
}
SuperType.prototype.sayColors = function() {
  console.log(this.colors)
}
function SubType() {
  SuperType.call(this)
}
var sub = new SubType()
sub.sayColors() // undefined
```

- 原型继承：不可以向父类传递参数，可以继承父类的属性和方法
```js
function SuperType() {
  this.colors = ['red','blue']
}
SuperType.prototype.sayColors = function() {
  console.log(this.colors)
}
function SubType(name) {
  this.name = name;
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
var sub = new SubType()
sub.sayColors() // ['red','blue']
```

- 组合继承：既是子类的实例，也是父类的实例，可传参，函数可复用
```js
function SuperType() {
  this.colors = ['red','blue']
}
SuperType.prototype.sayColors = function() {
  console.log(this.colors)
}
function SubType(name) {
  SuperType.call(this, name)
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
var sub = new SubType()
sub.sayColors() // ['red','blue']
```

### javascript 创建对象的几种方式？

javascript 创建对象简单的说,无非就是使用内置对象或各种自定义对象，当然还可以用 JSON；但写法有很多种，也能混合使用

1. 对象字面量的方式

```js
person = { firstname: "Mark", lastname: "Yun", age: 25, eyecolor: "black" };
```

2. 用 function 来模拟无参的构造函数

```js
function Person() {}
var person = new Person(); //定义一个function，如果使用new"实例化",该function可以看作是一个Class
person.name = "Mark";
person.age = "25";
person.work = function() {
  alert(person.name + " hello...");
};
person.work();
```

3. 用 function 来模拟参构造函数来实现（用 this 关键字定义构造的上下文属性）

```js
function Pet(name, age, hobby) {
  this.name = name; //this作用域：当前对象
  this.age = age;
  this.hobby = hobby;
  this.eat = function() {
    alert("我叫" + this.name + ",我喜欢" + this.hobby + ",是个程序员");
  };
}
var maidou = new Pet("麦兜", 25, "coding"); //实例化、创建对象
maidou.eat(); //调用eat方法
```

4. 用工厂方式来创建（内置对象）

```js
var wcDog = new Object();
wcDog.name = "旺财";
wcDog.age = 3;
wcDog.work = function() {
  alert("我是" + wcDog.name + ",汪汪汪......");
};
wcDog.work();
```

5. 用原型方式来创建

```js
function Dog() {}
Dog.prototype.name = "旺财";
Dog.prototype.eat = function() {
  alert(this.name + "是个吃货");
};
var wangcai = new Dog();
wangcai.eat();
```

6. 用混合方式来创建

```js
function Car(name, price) {
  this.name = name;
  this.price = price;
}
Car.prototype.sell = function() {
  alert("我是" + this.name + "，我现在卖" + this.price + "万元");
};
var camry = new Car("凯美瑞", 27);
camry.sell();
```

### Javascript 作用链域?

- 全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节
- 如果当前作用域没有找到属性或方法，会向上层作用域查找，直至全局函数，这种形式就是作用域链

### 谈谈 this 对象的理解

- this 总是指向函数的直接调用者
- 如果有 new 关键字，this 指向 new 出来的实例对象
- 在事件中，this 指向触发这个事件的对象
- IE 下 attachEvent 中的 this 总是指向全局对象 Window

### 什么是 Window 对象? 什么是 Document 对象?

- Window 对象表示当前浏览器的窗口，是 JavaScript 的顶级对象。
- 我们创建的所有对象、函数、变量都是 Window 对象的成员。
- Window 对象的方法和属性是在全局范围内有效的。
- Document 对象是 HTML 文档的根节点与所有其他节点（元素节点，文本节点，属性节点, 注释节点）
- Document 对象使我们可以通过脚本对 HTML 页面中的所有元素进行访问
- Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问

### 分析 ['1', '2', '3'].map(parseInt) 答案是多少？（常考）

答案:[1, NaN, NaN]

parseInt(string, radix) 第 2 个参数 radix 表示进制。省略 radix 或 radix = 0，则数字将以十进制解析

map 每次为 parseInt 传 3 个参数(elem, index, array)，其中 index 为数组索引

因此，map 遍历 ["1", "2", "3"]，相应 parseInt 接收参数如下

```js
parseInt("1", 0); // 1
parseInt("2", 1); // NaN
parseInt("3", 2); // NaN
```

所以，parseInt 参数 radix 不合法，导致返回值为 NaN

### new 操作符具体干了什么？

- 创建实例化对象，并将this指向该对象，同时继承该构造函数的原型
- 为该对象添加属性和方法
- 返回该对象

### 简述async/await
async/await是为了实现异步编程，async会把函数包装成Promise，而await会等待这个Promise处理，返回resolve的值。

### web 开发中会话跟踪的方法有哪些

- cookie
- session
- url 重写
- 隐藏 input
- ip 地址

### 什么是闭包（closure），为什么要用它？

闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域

闭包的特性：

- 函数内再嵌套函数
- 内部函数可以引用外层的参数和变量
- 参数和变量不会被垃圾回收机制回收

### javascript 代码中的"use strict"是什么意思 ?

use strict 是一种 ECMAscript 5 添加的（严格）运行模式,这种模式使得 Javascript 在更严格的条件下运行,使 JS 编码更加规范化的模式,消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为'。
严格模式主要有以下限制：
- 变量必须声明后再使用
- 函数的参数不能有同名属性，否则报错
- 不能使用 with 语句
- 不能对只读属性赋值，否则报错
- 不能使用前缀 0 表示八进制数，否则报错
- 不能删除不可删除的属性，否则报错
- 不能删除变量 delete prop，会报错，只能删除属性 delete global[prop]
- eval 不会在它的外层作用域引入变量
- eval 和 arguments 不能被重新赋值
- arguments 不会自动反映函数参数的变化
- 不能使用 arguments.callee
- 不能使用 arguments.caller
- 禁止 this 指向全局对象
- 不能使用 fn.caller 和 fn.arguments 获取函数调用的堆栈
- 增加了保留字（比如 protected、static 和 interface）

### js 延迟加载的方式有哪些？

defer 和 async、动态创建 DOM 方式（用得最多）、按需异步载入 js

### defer 和 async

- defer 并行加载 js 文件，会按照页面上 script 标签的顺序执行
- async 并行加载 js 文件，下载完成立即执行，不会按照页面上 script 标签的顺序执行

### Ajax 是什么? 如何创建一个 Ajax？

ajax 的全称：Asynchronous Javascript And XML

异步传输+js+xml

所谓异步，在这里简单地解释就是：向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果它自己会根据设定进行后续操作，与此同时，页面是不会发生整页刷新的，提高了用户体验

- 创建 XMLHttpRequest 对象,也就是创建一个异步调用对象
- 建一个新的 HTTP 请求,并指定该 HTTP 请求的方法、URL 及验证信息
- 设置响应 HTTP 请求状态变化的函数
- 发送 HTTP 请求
- 获取异步调用返回的数据
- 用 JavaScript 和 DOM 实现局部刷新

### Javascript 垃圾回收方法

标记清除（mark and sweep）

- 这是 JavaScript 最常见的垃圾回收方式，当变量进入执行环境的时候，比如函数中声明一个变量，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为“离开环境”
- 垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及被环境中变量所引用的变量（闭包），在这些完成之后仍存在标记的就是要删除的变量了

引用计数(reference counting)

- 在低版本 IE 中经常会出现内存泄露，很多时候就是因为其采用引用计数方式进行垃圾回收。引用计数的策略是跟踪记录每个值被使用的次数，当声明了一个 变量并将一个引用类型赋值给该变量的时候这个值的引用次数就加 1，如果该变量的值变成了另外一个，则这个值得引用次数减 1，当这个值的引用次数变为 0 的时 候，说明没有变量在使用，这个值没法被访问了，因此可以将其占用的空间回收，这样垃圾回收器会在运行的时候清理掉引用次数为 0 的值占用的空间

参考链接 [内存管理-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)

### 请解释一下 JavaScript 的同源策略

- 概念:同源策略是客户端脚本（尤其是 Javascript）的重要的安全度量标准。它最早出自 Netscape Navigator2.0，其目的是防止某个文档或脚本从多个不同源装载。这里的同源策略指的是：协议，域名，端口相同，同源策略是一种安全协议
- 指一段脚本只能读取来自同一来源的窗口和文档的属性

### 跨域解决方案

1、 通过jsonp跨域
2、 document.domain + iframe跨域
3、 location.hash + iframe
4、 window.name + iframe跨域
5、 postMessage跨域
6、 跨域资源共享（CORS）
7、 nginx代理跨域
8、 nodejs中间件代理跨域
9、 WebSocket协议跨域

##### 1. 通过jsonp跨域
动态创建script，再请求一个带参网址实现跨域通信，只能使用get请求

```前端
<script>
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = 'http://www.domain.com:8080/login?user=xiaoye&callback=callback'
document.head.appendChild(script)

function callback(res) {
  // todo
}
</script>
```

```后端
var querystring = require('querystring')
var http = require('http')
var server = http.createServer()

server.on('request', (req, res) => {
  var params = qs.parse(req.url.split('?')[1])
  var fn = params.callback;

  // jsonp设置
  res.writeHead(200, {'Content-type': 'text/typescript'})
  res.write(fn + `(${JSON.stringify(params)})`)
  res.end()
})

server.listen('8000')
console.log('server is running at port 8000')
```

##### 2. document.domain + iframe
此方案仅限主域相同，子域不同的跨域应用场景
实现原理：通过js强制设置两个页面的document.domain为基础主域。

##### 3. location.hash + iframe跨域
实现原理：a欲与b跨域相互通信，通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。

##### 4. `window.name` + iframe跨域
通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。

##### 5. postMessage 跨域
postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：
a.） 页面和其打开的新窗口的数据传递
b.） 多窗口之间消息传递
c.） 页面与嵌套的iframe消息传递
d.） 上面三个场景的跨域数据传递
用法：postMessage(data,origin)方法接受两个参数
data： html5规范支持任意基本类型或可复制的对象，但部分浏览器只支持字符串，所以传参时最好用JSON.stringify()序列化。
origin： 协议+主机+端口号，也可以设置为"*"，表示可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"。

```a.html
<iframe id="iframe" src="http://www.domain2.com/b.html" style="display:none;"></iframe>
<script>       
    var iframe = document.getElementById('iframe');
    iframe.onload = function() {
        var data = {
            name: 'aym'
        };
        // 向domain2传送跨域数据
        iframe.contentWindow.postMessage(JSON.stringify(data), 'http://www.domain2.com');
    };

    // 接受domain2返回数据
    window.addEventListener('message', function(e) {
        alert('data from domain2 ---> ' + e.data);
    }, false);
</script>
```
```b.html
<script>
    // 接收domain1的数据
    window.addEventListener('message', function(e) {
        alert('data from domain1 ---> ' + e.data);

        var data = JSON.parse(e.data);
        if (data) {
            data.number = 16;

            // 处理后再发回domain1
            window.parent.postMessage(JSON.stringify(data), 'http://www.domain1.com');
        }
    }, false);
</script>
```

##### 6. 跨域资源共享（CORS）
普通跨域请求：只服务端设置Access-Control-Allow-Origin，若要带cookie请求，前端也需设置
需要注意的是由于同源策略的限制，所读取的cookie为跨域请求接口所在域的cookie，而非当前页。如果想实现当前页cookie的写入，下文的nginx反向代理中设置proxy_cookie_domain和nodejs中间件代理中cookieDomainRewrite参数设置
目前所有浏览器支持该功能，CORS已成为主流解决方案
```前端
// 原生
xhr.withCredentials = true
// axios
axios.default.withCredentials = true
```
```后端
var http = require('http');
var server = http.createServer();
var qs = require('querystring');

server.on('request', (req, res) => {
  var postData = '';

  // 数据块接收中
  req.addListener('data', function(chunk) {
    postData += chunk;
  })

  // 数据块接收完毕
  req.addListener('end', function() {
    postData = qs.parse(postData)

    // 跨域设置
    res.writeHead(200, {
      // 后端允许发送Cookie
      'Access-Control-Allow-Credentials': 'true',
      // 允许访问的域(协议+域名+端口)
      'Access-control-Allow-Origin': 'http://www.domain1.com',
      // 此处设置的cookie还是domain2而非domain1，因为后端也不能跨域写cookie（nginx反向代理可以实现）
      // 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域
      'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'
    })

    res.write(JSON.stringify(postData))

    res.end()
  })
})
server.listen('8080');
console.log('Server is running at port 8080...');
```

##### 7. nginx代理跨域
- 解决iconfont跨域
浏览器跨域访问js、css、img等常规静态资源被同源策略许可，但iconfont字体文件里外，此时可在nginx的静态资源服务器中加入以下设置
```
location / {
  add_header Access-Control-Allow-Origin *
}
```
- 反向代理接口跨域
实现思路：通过Nginx配置一个代理服务器（域名与domain相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。

ngnix配置
```ngnix配置
server {
  listen  81;
  server_name www.domain1.com;

  location / {
    procy_pass  http://www/domain2/com:8080; // 反向代理
    proxy_cookie_domain www.domain2.com www.domain1.com
    index index.html index.htm

    // 当用wenpack-dev-server等中间件代理接口访问nignx时，此时无需浏览器参与，故没有同源限制，下面配置可不启用
    add_header Access-Control-Allow-Origin http://www.domain1.com; // 当前端只跨域不带cookie可为*
    add_header Access-Control-Allow-Credentials true
  }
}
```
前端代码
```前端
var xhr = new XNLHttpRequest();
// 浏览器是否读写cookie
xhr.withCredentials = true;

// 访问nginx中的代理服务器
xhr.open('get', 'http://www.domain1.com:81/?user=admin', true)
xhr.send();
```
后端代码
```
var http = require('http');
var server = http.createServer();
var qs = require('querystring');

server.on('request', (req, res) => {
  var params = qs.parse(req.url.substring(2))
  // 跨域设置
  res.writeHead(200, {
    // 后端允许发送Cookie
    'Access-Control-Allow-Credentials': 'true',
    // 允许访问的域(协议+域名+端口)
    'Access-control-Allow-Origin': 'http://www.domain1.com',
    // 此处设置的cookie还是domain2而非domain1，因为后端也不能跨域写cookie（nginx反向代理可以实现）
    // 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域
    'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'
  })

  res.write(JSON.stringify(postData))

  res.end()
})
server.listen('8080');
console.log('Server is running at port 8080...');
```

##### 8. nodejs中间件代理跨域
node中间件实现跨域代理，原理大致与nginx相同，都是通过启一个代理服务器，实现数据的转发，也可以通过设置cookieDomainRewrite参数修改响应头中cookie中域名，实现当前域的cookie写入，方便接口登录认证。
- 非vue框架的跨域（2次跨域）
利用node + express + http-proxy-middleware搭建一个proxy服务器

1）前端代码
```
var xhr = new XMLHttpRequest();

// 前端开关：浏览器是否读写cookie
xhr.withCredentials = true;

// 访问http-proxy-middleware代理服务器
xhr.open('get', 'http://www.domain1.com:3000/login?user=admin', true);
xhr.send();
```
2) 中间件服务器
```
var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

app.use('/', proxy({
    // 代理跨域目标接口
    target: 'http://www.domain2.com:8080',
    changeOrigin: true,

    // 修改响应头信息，实现跨域并允许带cookie
    onProxyRes: function(proxyRes, req, res) {
        res.header('Access-Control-Allow-Origin', 'http://www.domain1.com');
        res.header('Access-Control-Allow-Credentials', 'true');
    },

    // 修改响应信息中的cookie域名
    cookieDomainRewrite: 'www.domain1.com'  // 可以为false，表示不修改
}));

app.listen(3000);
console.log('Proxy server is listen at port 3000...');
```
3) Nodejs后台
```
var http = require('http');
var server = http.createServer();
var qs = require('querystring');

server.on('request', function(req, res) {
    var postData = '';

    // 数据块接收中
    req.addListener('data', function(chunk) {
        postData += chunk;
    });

    // 数据接收完毕
    req.addListener('end', function() {
        postData = qs.parse(postData);

        // 跨域后台设置
        res.writeHead(200, {
            'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
            'Access-Control-Allow-Origin': 'http://www.domain1.com',    // 允许访问的域（协议+域名+端口）
            /* 
             * 此处设置的cookie还是domain2的而非domain1，因为后端也不能跨域写cookie(nginx反向代理可以实现)，
             * 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域访问
             */
            'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'  // HttpOnly的作用是让js无法读取cookie
        });

        res.write(JSON.stringify(postData));
        res.end();
    });
});

server.listen('8080');
console.log('Server is running at port 8080...');
```
- vue框架的跨域（1次跨域）
利用Node + webpack + webpack-dev-server代理接口跨域。在开发环境下，由于vue渲染服务和接口代理服务都是webpack-dev-server同一个，所以也没与代理接口之间不再跨域，无须设置headers跨域信息了。

vue.config.js部分配置
```
moduls.exports = {
  devServer: {
    historyApiFallback: true,
    proxy: [{
      context: '/login',
      target: 'http://www.domain2.com:8080',  // 代理跨域目标接口
      changeOrigin: true,
      secure: false,  // 当代理某些https服务报错时用
      cookieDomainRewrite: 'www.domain1.com'  // 可以为false，表示不修改
    }],
    noInfo: true
  }
}
```

##### websocket协议跨域
WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很好的实现。
原生WebSocket API使用起来不太方便，我们使用Socket.io，它很好地封装了webSocket接口，提供了更简单、灵活的接口，也对不支持webSocket的浏览器提供了向下兼容。
1）前端代码
```
<script src="https://cdn.bootcss.com/socket.io/2.2.0/socket.io.js"></script>
<script>
var socket = io('http://www.domain2.com:8080');

// 连接成功处理
socket.on('connect', function() {
    // 监听服务端消息
    socket.on('message', function(msg) {
        console.log('data from server: ---> ' + msg); 
    });

    // 监听服务端关闭
    socket.on('disconnect', function() { 
        console.log('Server socket has closed.'); 
    });
});

document.getElementsByTagName('input')[0].onblur = function() {
    socket.send(this.value);
};
</script>
```

2) nodejs socket后台
```
var http = require('http');
var socket = require('socket.io');

// 启http服务
var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.end();
});

server.listen('8080');
console.log('Server is running at port 8080...');

// 监听socket连接
socket.listen(server).on('connection', function(client) {
    // 接收信息
    client.on('message', function(msg) {
        client.send('hello：' + msg);
        console.log('data from client: ---> ' + msg);
    });

    // 断开处理
    client.on('disconnect', function() {
        console.log('Client socket has closed.'); 
    });
});
```

### 实现一个函数 clone，可以对 JavaScript 中的 5 种主要的数据类型（包括 Number、String、Object、Array、Boolean）进行值复制（常考）

```js
// 代理法
function deepClone(obj) {
  if (!isObject(obj)) {
    throw new Error("obj 不是一个对象！");
  }

  let isArray = Array.isArray(obj);
  let cloneObj = isArray ? [...obj] : { ...obj };
  Reflect.ownKeys(cloneObj).forEach(key => {
    cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
  });

  return cloneObj;
}

function isObject(obj) {
  return typeof obj === 'object'
}
```

### ES6 let和var的区别
- 作用域
let为块级作用域
var为函数作用域
- 重复申明
通过let定义的变量，在同个作用域下不能重复申明
通过var定义的变量，在同个作用域下可以重复申明
- 暂时性死区
对var而言，代码在执行前会扫描所有var定义的变量，将其初始化为undefined。即变量提升。
对let而言，也会有变量提升，但有所不同，在执行到之前，变量会被申明，若访问则会报referenceError。也就是let没有被初始化，不可访问。

### 请解释什么是事件代理

事件代理（Event Delegation），又称之为事件委托。是 JavaScript 中常用绑定事件的常用技巧。顾名思义，“事件代理”即是把原本需要绑定的事件委托给父元素，让父元素担当事件监听的职务。事件代理的原理是 DOM 元素的事件冒泡。使用事件代理的好处是可以提高性能

### attribute 和 property 的区别是什么？

- attribute 是 dom 元素在文档中作为 html 标签拥有的属性；
- property 就是 dom 元素在 js 中作为对象拥有的属性。
- 对于 html 的标准属性来说，attribute 和 property 是同步的，是会自动更新的
- 但是对于自定义的属性来说，他们是不同步的

### 页面编码和被请求的资源编码如果不一致如何处理？

- 后端响应头设置 charset
- 前端页面`<meta>`设置 charset

### 异步加载 JS 的方式有哪些？

- 设置`<script>`属性 async="async" （一旦脚本可用，则会异步执行）
- 动态创建 script DOM：document.createElement('script');
- XmlHttpRequest 脚本注入
- 异步加载库 LABjs
- 模块加载器 Sea.js

### 箭头函数和function的区别？
- this指向
箭头函数this指向定义函数的环境，function定义的函数，this指向随着调用环境的变化而变化,
- 关于arguments
该对象在箭头函数体内不存在，如要使用可以用rest参数代替
- yield命令
不可使用，因此箭头函数不能用作Generator函数
- new
不可使用new命令，因为没有自身的this,无法使用call、apply。没有Prototype属性。

### bind/apply/call三者的区别
bind返回的是一个函数，需要手动调用，而apply和call则直接调用。
三者接收的第一个参数都是this指向的对象，
第二个参数apply接收一个数组，bind和call一样，可以接收多个用逗号隔开的参数。

### 列举一下 JavaScript 数组和对象有哪些原生方法

- 数组：
  - arr.concat(arr1, arr2, arrn);
  - arr.join(",");
  - arr.sort(func);
  - arr.push(e1);
  - arr.pop();
  - arr.push(e1, e2, en);
  - arr.shift();
  - arr.unshift(e1, e2, en);
  - arr.reverse();
  - arr.slice(start, end);
  - arr.splice(index, count, e1, e2, en);
  - arr.indexOf(el);
  - arr.includes(el); // ES6
- 对象：
  - object.hasOwnProperty(prop);
  - object.propertyIsEnumerable(prop);
  - object.valueOf();
  - object.toString();
  - object.toLocaleString();
  - Class.prototype.isPropertyOf(object);

### Array.slice() 与 Array.splice() 的区别？

- slice -- “读取”数组指定的元素，不会对原数组进行修改，返回修改后的数组

  - 语法：arr.slice(start, end)
  - start 指定选取开始位置（含）
  - end 指定选取结束位置（不含）

- splice
  - “操作”数组指定的元素，会修改原数组，返回被删除的元素
  - 语法：arr.splice(index, count, [insert Elements])
  - index 是操作的起始位置
  - count = 0 插入元素，count > 0 删除元素
  - [insert Elements] 向数组新插入的元素

### JavaScript 对象生命周期的理解？

- 当创建一个对象时，JavaScript 会自动为该对象分配适当的内存
- 垃圾回收器定期扫描对象，并计算引用了该对象的其他对象的数量
- 如果被引用数量为 0，或惟一引用是循环的，那么该对象的内存即可回收

### 哪些操作会造成内存泄漏？

- JavaScript 内存泄露指对象在不需要使用它时仍然存在，导致占用的内存不能使用或回收
- 未使用 var 声明的全局变量
- 闭包函数(Closures)
- 循环引用(两个对象相互引用)
- 控制台日志(console.log)
- 移除存在绑定事件的 DOM 元素(IE)

### 在 javascript 中，1 与 Number(1)有什么区别 [易混淆]

```js
var a = Number(1); // 1
var b = new Number(1); // Number {[[PrimitiveValue]]: 1}
typeof a; // number
typeof b; // object
a == b; // true
```

- var a = 1 是一个常量，而 Number(1)是一个函数
- new Number(1)返回的是一个对象
- a==b 为 true 是因为所以在求值过程中，总是会强制转为原始数据类型而非对象，例如下面的代码:


参考地址：[面试题：在 javascript 中，1 与 Number(1)有什么区别](https://segmentfault.com/q/1010000007552319)

### console.log(!!(new Boolean(false))输出什么 [易混淆]

true

布尔的包装对象 Boolean 的对象实例，对象只有在 null 与 undefined 时，才会认定为布尔的 false 值，布尔包装对象本身是个对象，对象->布尔 都是 true，所以 new Boolean(false)其实是布尔的 true。

### typeof 的原理，与 instanceof 、 Object.prototype.toString.call() 的区别

- js在底层存储变量，会在低位1-3存储类型信息，如000对象、010浮点数、100字符串、110布尔、1整数，null都为0，undefined-2^30
typeof不能判断array、object、null
instanceof不能判断Number、String、Boolean

### 浏览器中的 Event Loop

- 任务队列( Event Queue )
所有的任务可以分为同步任务和异步任务，同步任务，顾名思义，就是立即执行的任务，同步任务一般会直接进入到主线程中执行；而异步任务，包含了独立于主执行栈之外的宏任务和微任务。比如ajax网络请求，setTimeout 定时函数等都属于异步任务，异步任务会通过任务队列的机制(先进先出的机制)来进行协调。
- 宏任务（task）
  - script(整体代码)
  - setTimeout, setInterval, setImmediate,
  - I/O
  - UI rendering
- 微任务（jobs）
  - process.nextTick
  - Promise
  - Object.observe(已废弃)
  - MutationObserver(html5新特性)
- 事件循环执行机制：
循环首先从宏任务开始，遇到script，生成执行上下文，开始进入执行栈，可执行代码入栈，依次执行代码，调用完成出栈。
执行过程中遇到上边提到的调度者，会同步执行调度者，由调度者将其负责的任务（回调函数）放到对应的任务队列中，直到主执行栈清空，然后开始执行微任务的任务队列。微任务也清空后，再次从宏任务开始，一直循环这一过程。

参考地址:[Event Loop](https://segmentfault.com/a/1190000019900532)
