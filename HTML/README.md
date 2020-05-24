### Doctype 作用？标准模式与兼容模式各有什么区别?

- <!DOCTYPE>声明位于HTML文档中的第一行，处于 html 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
- 标准模式的排版 和 JS 运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

### HTML5 为什么只需要写 `<!DOCTYPE HTML>`？

- HTML5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；
- 而 HTML4.01 基于 SGML,所以需要对 DTD 进行引用，才能告知浏览器文档所使用的文档类型。

### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

定义：CSS 规范规定，每个元素都有 display 属性，确定该元素的类型，每个元素都有默认的 display 值，如 div 的 display 默认值为“block”，则为“块级”元素；span 默认 display 属性值为“inline”，是“行内”元素。

- 行内元素有：a b span img input select strong（强调的语气）
- 块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p
- 空元素：
  - 常见: br hr img input link meta
  - 不常见: area base col command embed keygen param source track wbr

不同浏览器（版本）、HTML4（5）、CSS2 等实际略有差异
参考: http://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements

### 页面导入样式时，使用 link 和@import 有什么区别？

- link 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS, 定义 rel 连接属性等作用；而@import 是 CSS 提供的，只能用于加载 CSS;
- 页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完再加载;
- import 是 CSS2.1 提出的，只在 IE5 以上才能被识别，而 link 是 XHTML 标签，无兼容问题;
- link 支持使用 js 控制 DOM 去改变样式，而@import 不支持;

### 介绍一下你对浏览器内核的理解？

主要分成两部分：渲染引擎(layout engineer 或 Rendering Engine)和 JS 引擎。

渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

JS 引擎则：解析和执行 javascript 来实现网页的动态效果。

最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。

### 常见的浏览器内核有哪些？

- Trident 内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称 MSHTML]
- Gecko 内核：Netscape6 及以上版本，FF,MozillaSuite/SeaMonkey 等
- Presto 内核：Opera7 及以上。 [Opera 内核原为：Presto，现为：Blink;]
- Webkit 内核：Safari,Chrome 等。 [ Chrome 的：Blink（WebKit 的分支）]

详细文章：[浏览器内核的解析和对比](http://www.cnblogs.com/fullhouse/archive/2011/12/19/2293455.html)

### html5 有哪些新特性、移除了那些元素？如何处理 HTML5 新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

- HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加
  - 绘画 canvas
  - 用于媒介回放的 video 和 audio 元素
  - 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失
  - sessionStorage 的数据在浏览器关闭后自动删除
  - 语意化更好的内容元素，比如 article、footer、header、nav、section
  - 表单控件，calendar、date、time、email、url、search
  - 新的技术 webworker, websocket, Geolocation
- 移除的元素：
  - 纯表现的元素：basefont，big，center，font, s，strike，tt，u;
  - 对可用性产生负面影响的元素：frame，frameset，noframes；
- 支持 HTML5 新标签：

  - IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，
  - 可以利用这一特性让这些浏览器支持 HTML5 新标签，
  - 浏览器支持新标签后，还需要添加标签默认的样式。
  - 当然也可以直接使用成熟的框架、比如 html5shim;

    ```html
    <!--[if lt IE 9]>
        <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
    <![endif]-->
    ```

- 如何区分 HTML5： DOCTYPE 声明\新增的结构元素\功能元素
    ```html
    - 新增的结构元素:
    （1）section
    表示页面中的一个内容区块，比如章节，页眉，页脚或页面中的其他部分。它可以与h1，h2，h3，h4，h5，h6等元素结合起来使用，标示文档结构。
    （2）article
    表示页面中的一块与上下文不相关的独立内容，譬如博客中的一篇文章或报纸中的一篇文章。
    （3）aside
    表示article元素的内容之外的，与article元素的内容相关的辅助信息。
    （4）header
    表示页面中一个内容区块或整个页面的标题。
    （5）hgroup
    用于对整个页面或页面中一个内容区块的标题进行组合。
    （6）footer
    表示整个页面或页面中一个内容区块的脚注。一般来说，它会包含创作者的姓名，创作日期以及创作者联系信息。
    （7）nav
    表示页面中导航链接的部分。
    （8）figure
    表示一段独立的流内容，一般表示文档主体流内容的一个独立单元。使用figcaption元素为figure元素组添加标题。
    ```
    ```html
    - 新增的功能元素：
    hgroup元素：用于对整个页面或页面中一个内容区块的标题进行组合。
    figure元素：表示一段独立的流内容，一般表示文档主题流内容中的一个独立单元。
    video元素：定义视频，比如电影片段或其他视频流。
    audio元素：定义音频，比如音乐或其他音频流。
    embed元素：用来插入各种多媒体，格式可以是MIDI、WAV、AIFF、AU、MP3等。
    mark元素：主要用来在视觉上向用户呈现需要突出显示或高亮显示的文字。
    time元素：表示日期或时间，也可以同时表示两者。
    canvas元素：表示图形，如图表和其他图像。
    output元素：表示不同类型的输出，比如脚本的输出。
    source元素：为媒介元素定义媒介资源。
    menu元素：表示菜单列表。当希望列出表单控制时使用该标签。
    ruby元素：表示ruby注释。
    rt元素：表示字符的解释或发音。
    rp元素：在ruby解释中使用，以定义不支持ruby元素的浏览器所显示的内容。
    wbr元素：表示软换行。
    command元素：表示命令按钮，如单选按钮、复选框或按钮。
    details元素：表示用户要求得到并且可以得到的细节信息，可与summary 元素配合使用。
    datalist元素：可选数据的列表，与input元素配合使用，可以制作出输入值的下拉列表。
    datagrid元素：表示可选数据的列表，它以树形列表的形式来显示。
    keygen元素：表示生成密钥。
    progress元素：表示运行中的进程，可以使用progress来显示JavaScript中耗费时间的函数的进程。
    email：表示必须输入E-mail地址的文本输入框。
    url：表示必须输入URL地址的文本输入框。
    number：表示必须输入数值的文本输入框。
    range：表示必须输入一定范围内数字值的文本输入框。
    Date Pickers：HTML5拥有多个可供选取日期和时间的新型输入文本框。
    ```
### 简述一下你对 HTML 语义化的理解？

- 用正确的标签做正确的事情。
- html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
- 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;
- 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;

### HTML5 的离线储存怎么使用，工作原理能不能解释一下？

在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

原理：HTML5 的离线存储是基于一个新建的.appcache 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像 cookie 一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

如何使用：

1. 页面头部像下面一样加入一个 manifest 的属性；
2. 在 cache.manifest 文件的编写离线存储的资源

```
CACHE MANIFEST
#v1.0

CACHE:
js/app.js
css/style.css

NETWORK:
assets/logo.png

FALLBACK:
/html5/ /404.html
```

- 在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问 app，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
- 离线的情况下，浏览器就直接使用离线存储的资源。

3. 在离线状态时，操作 window.applicationCache 进行需求实现。

参考链接：[HTML5 离线缓存-manifest 简介](https://yanhaijing.com/html/2014/12/28/html5-manifest/)

### 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

- cookie 是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）
- cookie 数据始终在同源的 http 请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
- sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。
- 存储大小：
  - cookie 数据大小不能超过 4k。
  - sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。
- 有效期（生命周期）：
  - localStorage: 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
  - sessionStorage: 数据在当前浏览器窗口关闭后自动删除。
  - cookie: 设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭

### localStorage实现同源页面传值
```
<!-- a.html -->
window.addEventListener('storage', function(e) {
  console.log(e)
})

<!-- b.html -->
const value = '一个值';
localstorage.setItem('key', value);
```


### iframe 有那些缺点？

- iframe 会阻塞主页面的 Onload 事件；
- 搜索引擎的检索程序无法解读这种页面，不利于 SEO;
- iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

使用 iframe 之前需要考虑这两个缺点。如果需要使用 iframe，最好是通过 javascript

动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题。

### Label 的作用是什么？是怎么用的？

label 标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

```html
  <label for="Name">Number:</label>
  <input type=“text“name="Name" id="Name"/>
  <label>Date:<input type="text" name="B"/></label>
```

### HTML5 的 form 如何关闭自动完成功能？

给不想要提示的 form 或某个 input 设置为 autocomplete=off。

### 如何实现浏览器内多个标签页之间的通信? (阿里)

- WebSocket、SharedWorker；
- 也可以调用 localstorage、cookies 等本地存储方式；

localstorage 另一个浏览上下文里被添加、修改或删除时，它都会触发一个storage事件，

我们通过监听事件，控制它的值来进行页面信息通信；

注意 quirks：Safari 在无痕模式下设置 localstorage 值时会抛出 QuotaExceededError 的异常；

### webSocket 如何兼容低浏览器？(阿里)

- Adobe Flash Socket 、
- ActiveX HTMLFile (IE) 、
- 基于 multipart 编码发送 XHR 、
- 基于长轮询的 XHR

### 页面可见性（Page Visibility API） 可以有哪些用途？

- 通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
- 在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；
```
document.addEventListener('visibilitychange', () => {
  console.log(document.visibilityState) // hidden visible
})
```

### 如何在页面上实现一个圆形的可点击区域？

- map+area 或者 svg
- border-radius
- 纯 js 实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等

### 实现不使用 border 画出 1px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。

```html
 <div style="height:1px;overflow:hidden;background:red"></div>
```

### title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？

- title 属性没有明确意义只表示是个标题，H1 则表示层次明确的标题，对页面信息的抓取也有很大的影响；
- strong 是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：strong 会重读，而 b 是展示强调内容。
- i 内容展示为斜体，em 表示强调的文本；

Physical Style Elements -- 自然样式标签

b, i, u, s, pre

Semantic Style Elements -- 语义样式标签

strong, em, ins, del, code

应该准确使用语义样式标签, 但不能滥用, 如果不能确定时首选使用自然样式标签。

### html 中 title 属性和 alt 属性的区别？

```html
<img src="#" alt="alt信息" />
<img src="#" alt="alt信息" title="title信息" />
```

### img标签之间的间距问题？

内联元素垂直方向上产生间隙的原因：默认基线对齐方式导致空节点出现（vertical-align:baseline;）

解决方案：
1. 父元素font-size: 0； 
2. 父元素vertical-align: middle
3. img元素 display: inline -> block



### 另外还有一些关于 title 属性的知识：

- title 属性可以用在除了 base，basefont，head，html，meta，param，script 和 title 之外的所有标签。
- title 属性的功能是提示。额外的说明信息和非本质的信息请使用 title 属性。title 属性值可以比 alt 属性值设置的更长。
- title 属性有一个很好的用途，即为链接添加描述性文字，特别是当连接本身并不是十分清楚的表达了链接的目的。

### 介绍 DOM 的发展

- DOM：文档对象模型（Document Object Model），定义了访问 HTML 和 XML 文档的标准，与编程语言及平台无关
- DOM0：提供了查询和操作 Web 文档的内容 API。未形成标准，实现混乱。如：document.forms['login']
- DOM1：W3C 提出标准化的 DOM，简化了对文档中任意部分的访问和操作。如：JavaScript 中的 Document 对象
- DOM2：原来 DOM 基础上扩充了鼠标事件等细分模块，增加了对 CSS 的支持。如：getComputedStyle(elem, pseudo)
- DOM3：增加了 XPath 模块和加载与保存（Load and Save）模块。如：XPathEvaluator

### 介绍 DOM0，DOM2，DOM3 事件处理方式区别

DOM0 级事件处理方式：

- btn.onclick = func;
- btn.onclick = null;

DOM2 级事件处理方式：

- btn.addEventListener('click', func, false); true: 捕获 false: 冒泡
- btn.removeEventListener('click', func, false);
- btn.attachEvent("onclick", func);
- btn.detachEvent("onclick", func);

DOM3 级事件处理方式：

- eventUtil.addListener(input, "textInput", func);
- eventUtil 是自定义对象，textInput 是 DOM3 级事件

### 事件的三个阶段

捕获、目标、冒泡

### 介绍事件“捕获”和“冒泡”执行顺序和事件的执行次数？

按照 W3C 标准的事件：首是进入捕获阶段，直到达到目标元素，再进入冒泡阶段

事件执行次数（DOM2-addEventListener）：元素上绑定事件的个数

- 注意 1：前提是事件被确实触发
- 注意 2：事件绑定几次就算几个事件，即使类型和功能完全一样也不会“覆盖”

事件执行顺序：判断的关键是否目标元素

- 非目标元素：根据 W3C 的标准执行：捕获->目标元素->冒泡（不依据事件绑定顺序）
- 目标元素：依据事件绑定顺序：先绑定的事件先执行（不依据捕获冒泡标准）
- 最终顺序：父元素捕获->目标元素事件 1->目标元素事件 2->子元素捕获->子元素冒泡->父元素冒泡
- 注意：子元素事件执行前提 事件确实“落”到子元素布局区域上，而不是简单的具有嵌套关系

### 在一个 DOM 上同时绑定两个点击事件：一个用捕获，一个用冒泡。事件会执行几次，先执行冒泡还是捕获？

- 该 DOM 上的事件如果被触发，会执行两次（执行次数等于绑定次数）
- 如果该 DOM 是目标元素，则按事件绑定顺序执行，不区分冒泡/捕获
- 如果该 DOM 是处于事件流中的非目标元素，则先执行捕获，后执行冒泡

### 事件的代理/委托

事件委托是指将事件绑定目标元素的到父元素上，利用冒泡机制触发该事件

优点：

- 可以减少事件注册，节省大量内存占用
- 可以将事件应用于动态添加的子元素上

缺点： 使用不当会造成事件在不应该触发时触发

示例：

```js
ulEl.addEventListener(
  "click",
  function(e) {
    var target = event.target || event.srcElement;
    if (!!target && target.nodeName.toUpperCase() === "LI") {
      console.log(target.innerHTML);
    }
  },
  false
);
```

### IE 与火狐的事件机制有什么区别？ 如何阻止冒泡？

IE 只事件冒泡，不支持事件捕获；火狐同时支持件冒泡和事件捕获。

阻止冒泡：

- 取消默认操作: w3c 的方法是 e.preventDefault()，IE 则是使用 e.returnValue = false;
- return false javascript 的 return false 只会阻止默认行为，而是用 jQuery 的话则既阻止默认行为又防止对象冒泡。
- 阻止冒泡 w3c 的方法是 e.stopPropagation()，IE 则是使用 e.cancelBubble = true

```js
[js] view plaincopy
function stopHandler(event)

    window.event?window.event.cancelBubble=true:event.stopPropagation();

}
```

参考链接:[浅谈 javascript 事件取消和阻止冒泡-开源中国 2015](http://wiki.jikexueyuan.com/project/brief-talk-js/event-cancellation-and-prevent-bubbles.html)

### IE 的事件处理和 W3C 的事件处理有哪些区别？(必考)

绑定事件

- W3C: targetEl.addEventListener('click', handler, false);
- IE: targetEl.attachEvent('onclick', handler);

删除事件

- W3C: targetEl.removeEventListener('click', handler, false);
- IE: targetEl.detachEvent(event, handler);

事件对象

- W3C: var e = arguments.callee.caller.arguments[0]
- IE: window.event

事件目标

- W3C: e.target
- IE: window.event.srcElement

阻止事件默认行为

- W3C: e.preventDefault()
- IE: window.event.returnValue = false'

阻止事件传播

- W3C: e.stopPropagation()
- IE: window.event.cancelBubble = true

### W3C 事件的 target 与 currentTarget 的区别？

- target 只会出现在事件流的目标阶段
- currentTarget 可能出现在事件流的任何阶段
- 当事件流处在目标阶段时，二者的指向相同
- 当事件流处于捕获或冒泡阶段时：currentTarget 指向当前事件活动的对象(一般为父级)

### 如何派发事件(dispatchEvent)？（如何进行事件广播？）

- W3C: 使用 dispatchEvent 方法
- IE: 使用 fireEvent 方法

```js
var fireEvent = function(element, event) {
  if (document.createEventObject) {
    var mockEvent = document.createEventObject();
    return element.fireEvent("on" + event, mockEvent);
  } else {
    var mockEvent = document.createEvent("HTMLEvents");
    mockEvent.initEvent(event, true, true);
    return !element.dispatchEvent(mockEvent);
  }
};
```

### 区分什么是“客户区坐标”、“页面坐标”、“屏幕坐标”？

- 客户区坐标：鼠标指针在可视区中的水平坐标(clientX)和垂直坐标(clientY)

  相对于浏览器的左上定点为原点

- 页面坐标：鼠标指针在页面布局中的水平坐标(pageX)和垂直坐标(pageY)

  相对于 Document 对象即文档窗口的左上顶点为坐标原点

- 屏幕坐标：设备物理屏幕的水平坐标(screenX)和垂直坐标(screenY)

### 如何获得一个 DOM 元素的绝对位置？

- elem.offsetLeft：返回元素相对于其定位父级左侧的距离
- elem.offsetTop：返回元素相对于其定位父级顶部的距离
- elem.getBoundingClientRect()：返回一个 DOMRect 对象，包含一组描述边框的只读属性，单位像素

### DOM 操作——怎样添加、移除、移动、复制、创建和查找节点?

创建新节点

- createDocumentFragment() //创建一个 DOM 片段
- createElement() //创建一个具体的元素
- createTextNode() //创建一个文本节点

添加、移除、替换、插入

- appendChild()
- removeChild()
- replaceChild()
- insertBefore() //在已有的子节点前插入一个新的子节点

查找

- getElementsByTagName() //通过标签名称
- getElementsByName() // 通过元素的 Name 属性的值(IE 容错能力较强，会得到一个数组，其中包括 id 等于 name 值的) \* getElementById() //通过元素 Id，唯一性