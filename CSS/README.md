<!-- v1.1 -->
### css: transform 多值执行顺序
- 如transform: rotate(90deg) translate(100px, 100px); 按照后写的先执行

### transform:translateZ(0) 提升性能？
- 使用transform和opacity做CSS动画的时候，会将元素提升为一个复合层；而使用js操作css属性做动画时，必须使用translateZ或will-change才能将元素强行提升至一个复合层。

### link 与 @import 的区别

- link 是 HTML 方式， @import 是 CSS 方式
- link 最大限度支持并行下载，@import 过多嵌套导致串行下载，出现 FOUC
- link 可以通过 rel="alternate stylesheet" 指定候选样式
- 浏览器对 link 支持早于@import ，可以使用 @import 对老浏览器隐藏样式
- @import 必须在样式规则之前，可以在 css 文件中引用其他文件
- 总体来说：link 优于@import

### CSS 有哪些继承属性

- 关于文字排版的属性如：
  - font
  - word-break
  - letter-spacing
  - text-align
  - text-rendering
  - word-spacing
  - white-space
  - text-indent
  - text-transform
  - text-shadow
- line-height
- color
- visibility
- cursor

### 外边距折叠(collapsing margins)

外边距重叠就是 margin-collapse

相邻的两个盒子（可能是兄弟关系也可能是祖先关系）的外边距可以结合成一个单独的外边距。 这种合并外边距的方式被称为折叠，结合而成的外边距称为折叠外边距

折叠结果遵循下列计算规则：

- 两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值
- 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值
- 两个外边距一正一负时，折叠结果是两者的相加的和

### 介绍一下标准的 CSS 的盒子模型？低版本 IE 的盒子模型有什么不同的？

- 有两种， IE 盒子模型、W3C 盒子模型；
- 盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；
- 标准(W3C)盒模型：元素宽度 = width + padding + border + margin
- 怪异(IE)盒模型：元素宽度 = width + margin
- 区 别： IE 的 content 部分把 border 和 padding 计算了进去;
- 标准浏览器通过设置 css3 的 box-sizing: border-box 属性，触发“怪异模式”解析计算宽高

### CSS 选择符有哪些？

- id 选择器（ # myid）
- 类选择器（.myclassname）
- 标签选择器（div, h1, p）
- 相邻选择器（h1 + p）
- 子选择器（ul > li）
- 后代选择器（li a）
- 通配符选择器（ \* ）
- 属性选择器（a[rel = "external"]）
- 伪类选择器（a:hover, li:nth-child）

### CSS3 新增伪类有那些？

- p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
- p:last-of-type 选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
- p:only-of-type 选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
- p:only-child 选择属于其父元素的唯一子元素的每个 <p> 元素。
- p:nth-child(2) 选择属于其父元素的第二个子元素的每个 <p> 元素。

- :after 在元素之前添加内容,也可以用来做清除浮动。
- :before 在元素之后添加内容
- :enabled 选择器匹配每个已启用的元素（大多用在表单元素上）。
- :disabled 控制表单控件的禁用状态。
- :checked 单选框或复选框被选中

### 如何居中 div？如何居中一个浮动元素？如何让绝对定位的 div 居中？

- 如果需要居中的元素为常规流中 inline 元素，为父元素设置 text-align: center;即可实现

- 如果需要居中的元素为常规流中 block 元素，1）为元素设置宽度，2）设置左右 margin 为 auto。

- 如果需要居中的元素为浮动元素，1）为元素设置宽度，2）position: relative;，3）浮动方向偏移量（left 或者 right）设置为 50%，4）浮动方向上的 margin 设置为元素宽度一半乘以-1

- 如果需要居中的元素为绝对定位元素，1）为元素设置宽度，2）偏移量设置为 50%，3）偏移方向外边距设置为元素宽度一半乘以-1

- 如果需要居中的元素为绝对定位元素，1）为元素设置宽度，2）设置左右偏移量都为 0,3）设置左右外边距都为 auto

### 如何竖直居中一个元素

- 绝对定位居中
- 如果居中的是行内元素，可以设置父级 height 与 line-height 相等
- 设置 margin/padding 居中
- 相对位置偏移居中
- flex 居中 设置 align-items:center 即可

### display 有哪些值？说明他们的作用

- block 像块类型元素一样显示。
- none 缺省值。像行内元素类型一样显示。
- inline-block 像行内元素一样显示，但其内容像块类型元素一样显示。
- list-item 像块类型元素一样显示，并添加样式列表标记。
- table 此元素会作为块级表格来显示
- inherit 规定应该从父元素继承 display 
- flex 弹性布局

### position 有哪些值 relative 和 absolute 定位原点是？

- absolute 生成绝对定位的元素，相对于值不为 static 的第一个父元素进行定位。
- fixed （老 IE 不支持） 生成绝对定位的元素，相对于浏览器窗口进行定位。
- relative 生成相对定位的元素，相对于其正常位置进行定位。
- static 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right - z-index 声明）。
- inherit 规定从父元素继承 position 属性的值

### CSS3 有哪些新特性？

- 新增选择器 p:nth-child(n){color: rgba(255, 0, 0, 0.75)}
- 弹性盒模型 display: flex;
- 多列布局 column-count: 5;
- 媒体查询 @media (max-width: 480px) {.box: {column-count: 1;}}
- 个性化字体 @font-face{font-family: BorderWeb; src:url(BORDERW0.eot);}
- 颜色透明度 color: rgba(255, 0, 0, 0.75);
- 圆角 border-radius: 5px;
- 渐变 background:linear-gradient(red, green, blue);
- 阴影 box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3);
- 倒影 box-reflect: below 2px;
- 文字装饰 text-stroke-color: red;
- 文字溢出 text-overflow:ellipsis;
- 背景效果 background-size: 100px 100px;
- 边框效果 border-image:url(bt_blue.png) 0 10;
- 平滑过渡 transition: all .3s ease-in .1s;
- 动画 @keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s;
- 转换
  - 旋转 transform: rotate(20deg);
  - 倾斜 transform: skew(150deg, -10deg);
  - 位移 transform: translate(20px, 20px);
  - 缩放 transform: scale(.5);

### 用纯 CSS 创建一个三角形的原理是什么？

```css
/* 把上、左、右三条边隐藏掉（颜色设为 transparent）*/
#demo {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```

### 文字超出部分显示...
- 单行
```
div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
```
- 多行
```
div {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; // 行数
}
```

### display:inline-block 间隙问题原因？怎么解决？(携程)

原因：行框的排列会受到中间空白（回车\空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间。

解决方案：移除空格、使用 margin 负值、使用 font-size:0、letter-spacing、word-spacing

### css 定义的权重
网上有声称诸如id权重100，class权重10等计算方法，这是不正确的。
实际上应该如下：
1. 如果一个声明来自style属性而不是选择器，计作1或者a=1（在一个html文档中，元素“style”的值是样式表规则，这个规则中没有选择器，所以a=1, b=0, c=0, and d=0）
2. 选择器中id属性的个数,计作b
3. 选择器中其他属性以及伪类的个数，计作c
4. 选择器中元素及伪元素的个数，计作d

一些例子：
``` css
* {}     /* a=0 b=0 c=0 d=0 -> 优先级= 0,0,0,0 */
li {}     /* a=0 b=0 c=0 d=1 -> 优先级 = 0,0,0,1 */
li:first-line {}     /* a=0 b=0 c=0 d=2 -> 优先级 = 0,0,0,2 */
ul li {}     /* a=0 b=0 c=0 d=2 -> 优先级 = 0,0,0,2 */
ul ol+li {}     /* a=0 b=0 c=0 d=3 -> 优先级 = 0,0,0,3 */
h1 + *[rel=up]{}     /* a=0 b=0 c=1 d=1 -> 优先级 = 0,0,1,1 */
ul ol li.red {}     /* a=0 b=0 c=1 d=3 -> 优先级 = 0,0,1,3 */
li.red.level {}     /* a=0 b=0 c=2 d=1 -> 优先级 = 0,0,2,1 */
#x34y {}     /* a=0 b=1 c=0 d=0 -> 优先级 = 0,1,0,0 */
style=""     /* a=1 b=0 c=0 d=0 -> 优先级 = 1,0,0,0 */

[备注]
　　:first-line 伪元素
　　[rel=up] 其他属性
```
优先级只基与选择器的形式，特殊的，一个“[id=p33]“形式的选择器是按照属性选择器来计算的（a=0, b=0, c=1, d=0），即使用定义中包含ID。

了解了这些 你应该不会再对”11个class与一个id”谁的优先级高“这类的问题有疑问了吧，因为a,b,c,d只是在各自位置数字的累加，而不会越级。

当然权重最高的是!important，会覆盖以上所有。行内样式也高不过它。

有一幅生动的图可以展示这个规则：
![大鱼吃小鱼](http://image.zhangxinxu.com/image/blog/201208/specifishity1-1.png)

### CSS 优先级算法如何计算？

- 优先级就近原则，同权重情况下样式定义最近者为准
- 载入样式以最后载入的为准
- 优先级为: !important > id > class > tag important 比 内联优先级高

### 谈谈浮动和清除浮动

浮动的框可以向左或向右移动，直到他的外边缘碰到包含框或另一个浮动框的边框为止。由于浮动框不在文档的普通流中，所以文档的普通流的块框表现得就像浮动框不存在一样。浮动的块框会漂浮在文档普通流的块框上

解决方法

1. 父级 div 定义伪类：after 和 zoom (推荐使用，建议定义公共类，以减少 CSS 代码)

```css
    .clearfloat:after {
        content: "", // 内容为空
        display: block, // 转化为块
        visibility: hidden, // 隐藏
        height: 0, // 高度为0
        clear: both, // 清除浮动
    }
    .clearfloat {
        *zoom: 1 // *为ie6,7专用处理
    }
```

2. 在结尾处添加空 div 标签 clear:both

```html
<div class="parent">
    <div class="left">Left</div>
    <div class="right">Right</div>
    <div class="clearfloat"></div>
</div>

<style>
    .left {float:left}
    .clearfloat{clear:both}
</style>
```
3. 双伪元素清除浮动(强力推荐)

```css
.clearfloat:before,
.clearfloat:after {
    display: table,
    content: "",
}
.clearfloat:after {
    clear: both
}
.clearfloat {
    *zoom: 1
}
```
4. 父级 div 定义 overflow:auto
5. 父级 div 定义 overflow:hidden

参考链接[几种常用的清除浮动方法](https://www.cnblogs.com/nxl0908/p/7245460.html)

### box-sizing 常用的属性有哪些？分别有什么作用？

- box-sizing: content-box; // 默认的标准(W3C)盒模型元素效果
- box-sizing: border-box; // 触发怪异(IE)盒模型元素的效果
- box-sizing: inherit; // 继承父元素 box-sizing 属性的值

### 请列举几种隐藏元素的方法

- visibility: hidden; 这个属性只是简单的隐藏某个元素，但是元素占用的空间任然存在
- opacity: 0; CSS3 属性，设置 0 可以使一个元素完全透明
- position: absolute; 设置一个很大的 left 负值定位，使元素定位在可见区域之外
- display: none; 元素会变得不可见，并且不会再占用文档的空间。
- transform: scale(0); 将一个元素设置为缩放无限小，元素将不可见，元素原来所在的位置将被保留
- \<div hidden="hidden"\> HTML5 属性,效果和 display:none;相同，但这个属性用于记录一个元素的状态
- height: 0; 将元素高度设为 0 ，并消除边框
- filter: blur(0); CSS3 属性，将一个元素的模糊度设置为 0

### rgba() 和 opacity 的透明效果有什么不同？

- opacity 作用于元素以及元素内的所有内容（包括文字）的透明度
- rgba() 只作用于元素自身的颜色或其背景色，子元素不会继承透明效果

### css 属性 content 有什么作用？

content 属性专门应用在 before/after 伪元素上，用于插入额外内容或样式

### 请解释一下 CSS3 的 Flexbox（弹性盒布局模型）以及适用场景？

Flexbox 用于不同尺寸屏幕中创建可自动扩展和收缩布局
- display: flex, 
- flex-direction(方向): row | row-reverse | column | column-reverse
- flex-wrap(换行),: wrap | nowrap
- flex-flow: direction wrap
- justify-content: flex-start | flex-end | center | space-between | space-around 主轴X轴
- align-items: flex-start | flex-end | center | baseline | strech 交叉轴Y轴
- align-content: 多交叉轴，及多级flex布局 flex-start | flex-end | center | strech | space-between | space-around

- flex-item:
- flex-grow: 扩展
- flex-shrink: 缩放
- flex-basic: 项目大小
- flex: none | [<flex-grow, flex-shrink> || flex-basic], 默认值0 1 auto，快捷值auto(1 1 auto), none(0 0 auto) 
- order: 顺序，越小越前面
- align-self: 继承align-items，默认auto | flex-start | flex-end | center | baseline | strech


### 请写出多种等高布局

- 在列的父元素上使用这个背景图进行 Y 轴的铺放，从而实现一种等高列的假像
- 模仿表格布局等高列效果：兼容性不好，在 ie6-7 无法正常运行
- css3 flexbox 布局： .container{display: flex; align-items: stretch;}

### 圣杯布局的实现原理？

要求：三列布局；中间主体内容前置，且宽度自适应；两边内容定宽

好处：重要的内容放在文档流前面可以优先渲染

原理：利用相对定位、浮动、负边距布局，而不添加额外标签

```css
  .container {
      padding-left: 150px;
      padding-right: 190px;
  }
  .main {
      float: left;
      width: 100%;
  }
  .left {
      float: left;
      width: 190px;
      margin-left: -100%;
      position: relative;
      left: -150px;
  }
  .right {
      float: left;
      width: 190px;
      margin-left: -190px;
      position: relative;
      right: -190px;
  }
```

### 什么是双飞翼布局？实现原理？

双飞翼布局：对圣杯布局（使用相对定位，对以后布局有局限性）的改进，消除相对定位布局

原理：主体元素上设置左右边距，预留两翼位置。左右两栏使用浮动和负边距归位，消除相对定位。

```css
.container {
    /*padding-left:150px;*/
    /*padding-right:190px;*/
}
.main-wrap {
    width: 100%;
    float: left;
}
.main {
    margin-left: 150px;
    margin-right: 190px;
}
.left {
    float: left;
    width: 150px;
    margin-left: -100%;
    /*position: relative;*/
    /*left:-150px;*/
}
.right {
    float: left;
    width: 190px;
    margin-left: -190px;
    /*position:relative;*/
    /*right:-190px;*/
}
```

### 在 CSS 样式中常使用 px、em、rem、vw 在表现上有什么区别？

- px 相对于显示器屏幕分辨率，无法用浏览器字体放大功能
- em 值并不是固定的，会继承父级的字体大小： em = 像素值 / 父级 font-size
- rem 值并不是固定的，会继承根元素html的字体大小： rem = 像素值 / 根元素 font-size
- vw 根据视口调整大小，整个视口为宽度为100vw

### CSS 预处理器的作用？

- CSS 预处理器基本思想：为 CSS 增加了一些编程的特性（变量、逻辑判断、函数等）
- 开发者使用这种语言进行进行 Web 页面样式设计，再编译成正常的 CSS 文件使用
- 使用 CSS 预处理器，可以使 CSS 更加简洁、适应性更强、可读性更佳，无需考虑兼容性
- 最常用的 CSS 预处理器语言包括：Sass（SCSS）和 LESS

### 浏览器是怎样解析 CSS 选择器的？

浏览器解析 CSS 选择器的方式是从右到左

### 抽离样式模块怎么写，说出思路？

CSS 可以拆分成 2 部分：公共 CSS 和 业务 CSS：

- 网站的配色，字体，交互提取出为公共 CSS。这部分 CSS 命名不应涉及具体的业务
- 对于业务 CSS，需要有统一的命名，使用公用的前缀。可以参考面向对象的 CSS

### 元素竖向的百分比设定是相对于容器的高度吗？

元素竖向的百分比设定是相对于容器的宽度，而不是高度（这句话说的有问题）
正确说法：如果是height的话，是相对于容器高度，如果是padding-height,margin-height则是相对于容器的宽度。

### 全屏滚动的原理是什么？ 用到了 CSS 的那些属性？

- 原理类似图片轮播原理，超出隐藏部分，滚动时显示
- 可能用到的 CSS 属性：overflow:hidden; transform:translate(100%, 100%); display:none;

### 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的 IE？

- 响应式设计就是网站能够兼容多个终端，而不是为每个终端做一个特定的版本
- 基本原理是利用 CSS3 媒体查询，为不同尺寸的设备适配不同样式
- 对于低版本的 IE，可采用 JS 获取屏幕宽度，然后通过 resize 方法来实现兼容：

```js
$(window).resize(function () {
    screenRespond();
});

screenRespond();

function screenRespond(){

    var screenWidth = $(window).width();

    if(screenWidth <= 1800){
        $("body").attr("class", "w1800");
    }

    if(screenWidth <= 1400){
        $("body").attr("class", "w1400");
    }

    if(screenWidth > 1800){
        $("body").attr("class", "");
    }
}
```

### 什么是视差滚动效果，如何给每页做不同的动画？

- 视差滚动是指多层背景以不同的速度移动，形成立体的运动效果，具有非常出色的视觉体验
- 一般把网页解剖为：背景层、内容层和悬浮层。当滚动鼠标滚轮时，各图层以不同速度移动，形成视差的

实现原理

- 以 “页面滚动条” 作为 “视差动画进度条”
- 以 “滚轮刻度” 当作 “动画帧度” 去播放动画的
- 监听 mousewheel 事件，事件被触发即播放动画，实现“翻页”效果

### a 标签上四个伪类的执行顺序是怎么样的？

link > visited > hover > active

### 伪元素和伪类的区别和作用？

伪元素:在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：

```css
p::before {content:"第一章：";}
p::after {content:"Hot!";}
p::first-line {background:red;}
p::first-letter {font-size:30px;}
```

伪类: 将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：

```css
a:hover {color: #FF00FF}
p:first-child {color: red}
```

### ::before 和 :after 中双冒号和单冒号有什么区别？

- 在 CSS 中伪类一直用 : 表示，如 :hover, :active 等
- 伪元素在 CSS1 中已存在，当时语法是用 : 表示，如 :before 和 :after
- 后来在 CSS3 中修订，伪元素用 :: 表示，如 ::before 和 ::after，以此区分伪元素和伪类
- 由于低版本 IE 对双冒号不兼容，开发者为了兼容性各浏览器，继续使使用 :after 这种老语法表示伪元素
- 综上所述：::before 是 CSS3 中写伪元素的新语法； :after 是 CSS1 中存在的、兼容 IE 的老语法

### 网站图片文件，如何点击下载？而非点击预览？

给a标签添加download属性
```html
<a href="logo.jpg" download>下载</a> <a href="logo.jpg" download="网站LOGO" >下载</a>
```

### iOS safari 如何阻止“橡皮筋效果”？

```js
  $(document).ready(function(){
      var stopScrolling = function(event) {
          event.preventDefault();
      }
      document.addEventListener('touchstart', stopScrolling, false);
      document.addEventListener('touchmove', stopScrolling, false);
  });
```

### 你对 line-height 是如何理解的？

- line-height 指一行字的高度，包含了字间距，实际上是下一行基线到上一行基线距离
- 如果一个标签没有定义 height 属性，那么其最终表现的高度是由 line-height 决定的
- 一个容器没有设置高度，那么撑开容器高度的是 line-height 而不是容器内的文字内容
- 把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中

### line-height 三种赋值方式有何区别？（带单位、纯数字、百分比）

- 带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高
- 纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 \* 18 = 27px
- 百分比：将计算后的值传递给后代

### 设置元素浮动后，该元素的 display 值会如何变化？

设置元素浮动后，该元素的 display 值自动变成 block


### 让页面里的字体变清晰，变细用 CSS 怎么做？（IOS 手机浏览器字体齿轮设置）

```css
  -webkit-font-smoothing: antialiased;
```

### font-style 属性 oblique 是什么意思？

font-style: oblique; 使没有 italic 属性的文字实现倾斜

### 如果需要手动写动画，你认为最小时间间隔是多久？

16.7ms 多数显示器默认频率是 60Hz，即 1 秒刷新 60 次，所以理论上最小间隔: 1s / 60 \* 1000 ＝ 16.7ms

### overflow: scroll 时不能平滑滚动的问题怎么处理？

监听滚轮事件，然后滚动到一定距离时用 jquery 的 animate 实现平滑效果。

### 一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度

- 方案 1： .sub { height: calc(100%-100px); }
- 方案 2： .container { position:relative; } .sub { position: absolute; top: 100px; bottom: 0; }
- 方案 3： .container { display:flex; flex-direction:column; } .sub { flex:1; }

### CSS 中类 class 和 id 的区别

对于 CSS 而言，id 和 class 都是选择器，唯一不同的地方在于权重不同。如果只说 CSS，上面那一句话就讲完了。拓展出来，对于 html 而言，id 和 class 都是 dom 元素的属性值。不同的地方在于 id 属性的值是唯一的，而 class 属性值可以重复。id 还一个老特性是锚点功能，当浏览器地址栏有一个#xxx，页面会自动滚动到 id=xxx 的元素上面。

更直接的：id 给 js 用，class 给 css 用（趋势）

### 请问为何要使用 transform 而非 absolute positioning，或反之的理由？为什么？

- 使用 transform 或 position 实现动画效果时是有很大差别。
- 使用 transform 时，可以让 GPU 参与运算，动画的 FPS 更高。
- 使用 position 时，最小的动画变化的单位是 1px，而使用 transform 参与时，可以做到更小（动画效果更加平滑）
- 功能都一样。但是 translate 不会引起浏览器的重绘和重排，这就相当 nice 了。

反之

- tranform 改变 fixed 子元素的定位对象
- transform 改变元素层叠顺序
  [transform 的副作用](http://imweb.io/topic/5a23e1f1a192c3b460fce26e)

### 你熟悉 SVG 样式的书写吗？

| SVG            | 等效的 CSS                               |
| -------------- | ---------------------------------------- |
| fill           | background-color 或 color                |
| fill-opacity   | background-color 或 color 设置 rgba/hsla |
| opacity        | opacity                                  |
| stroke         | border-color                             |
| stroke-width   | border-thickness                         |
| stroke-opacity | border-color 设置 rgba                   |
| rx, ry         | border-radius                            |

下面的属性在 SVG 和 CSS 中是一样的，只是在 SVG 的 transformations 和 dimensions 中稍有区别：

- font-family, font-size, font-style, font-variant 和 font-weight
- width 和 height
- scale, rotate, skew

参考链接： [基本的 SVG 样式属性](http://justcode.ikeepstudying.com/2016/08/%E5%9F%BA%E6%9C%AC%E7%9A%84svg%E6%A0%B7%E5%BC%8F%E5%B1%9E%E6%80%A7/)

### 如果设计中使用了非标准的字体，你该如何去实现？

- 用图片代替
- web fonts 在线字库
- @font-face

参考链接：[如果设计中使用了非标准的字体，你该如何去实现？](https://blog.csdn.net/xujie_0311/article/details/42368371)
