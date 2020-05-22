<!-- v1.1 -->
### vue 的优点是什么？

- 低耦合。视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的"View"上，当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变。
- 可重用性。你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 view 重用这段视图逻辑。
- 独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用 Expression Blend 可以很容易设计界面并生成 xml 代码。
- 可测试。界面素来是比较难于测试的，而现在测试可以针对 ViewModel 来写。

### 请详细说下你对 vue 生命周期的理解？

答：总共分为 8 个阶段创建前/后，载入前/后，更新前/后，销毁前/后。

- 创建前/后： 在 beforeCreate 阶段，vue 实例的挂载元素 el 还没有。
- 载入前/后：在 beforeMount 阶段，vue 实例的\$el 和 data 都初始化了，但还是挂载之前为虚拟的 dom 节点，data.message 还未替换。在 mounted 阶段，vue 实例挂载完成，data.message 成功渲染。
- 更新前/后：当 data 变化时，会触发 beforeUpdate 和 updated 方法。
- 销毁前/后：在执行 destroy 方法后，对 data 的改变不会再触发周期函数，说明此时 vue 实例已经解除了事件监听以及和 dom 的绑定，但是 dom 结构依然存在

### 组件之间的传值？

1. 父组件与子组件传值

```js
//父组件通过标签上面定义传值
<template>
  <main :obj="data"></main>
</template>
<script>
  //引入子组件
  import Main form "./main"

  exprot default{
      name:"parent",
      data(){
          return {
              data:"我要向子组件传递数据"
          }
      },
      //初始化组件
      components:{
          Main
      }
  }
</script>

//子组件通过props方法接受数据
<template>
  <div>{{data}}</div>
</template>
<script>
  exprot default{
      name:"son",
      //接受父组件传值
      props:["data"]
  }
</script>
```

2. 子组件向父组件传递数据

```js
//子组件通过$emit方法传递参数
<template>
  <div @click="events"></div>
</template>
<script>
  exprot default{
      methods:{
          events:function(){
              this.$emit('func')
          }
      }
  }
</script>

//

<template>
  <main @fcnc="fClick">{{data}}</main>
</template>
<script>
  //引入子组件
     import Main form "./main"
     exprot default{
         name:"son",
         methods: {
             fClick: function () {

             }
         }
     }
</script>
```

### 自定义指令(v-check, v-focus) 的方法有哪些? 它有哪些钩子函数? 还有哪些钩子函数参数

- 全局定义指令：在 vue 对象的 directive 方法里面有两个参数, 一个是指令名称, 另一个是函数。
- 组件内定义指令：directives
- 钩子函数: bind(绑定事件出发)、inserted(节点插入时候触发)、update(组件内相关更新)
- 钩子函数参数： el、binding

### 说出至少 4 种 vue 当中的指令和它的用法

v-if(判断是否隐藏)、v-for(把数据遍历出来)、v-bind(绑定属性)、v-model(实现双向绑定)

### vue 的双向绑定的原理是什么(常考)

vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

具体步骤：
第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter 这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化

第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:

- 在自身实例化时往属性订阅器(dep)里面添加自己
- 自身必须有一个 update()方法
- 待属性变动 dep.notice()通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。

第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。

### class scoped 原理

通过 postcss 转译实现，为组件中的 dom 添加一个 data-v-hash 值的属性

### Vue 组件 data 为什么必须是函数，而 Vue 实例则没有此限制

Vue 组件可能存在多个，如果 data 为对象，则多个组件会共享一个 data 对象，当对象的值发生变化时会影响到所有组件。采用函数定义模式，在 initData 时会将其作为工厂函数返回全新的 data 对象，有效避免多个组件之间的状态污染问题。而在 Vue 实例一般只有一个，不存在此问题。

### Vue 中 Key 的作用和工作原理

key 是为了更高效的更新虚拟 dom，其原理是 vue 在 patch 过程中通过 key 可以精确对比两个节点情况，从而避免频繁的更新不同元素，减少 dom 操作量，提高性能

### Vue 的 diff 算法

![diff](https://pic3.zhimg.com/80/v2-8c296b146a665bbe006bbb5d4026930a_1440w.jpg)
执行方法 patchVnode()，整体策略：深度优先，同层比较
更新 Vdom，updateChildren()

- diff 算法是虚拟 dom 技术的必然产物：通过新旧虚拟 dom 对比，将变化部分更新在真实 dom 上；另外 diff 的高效执行过程，可以降低时间复杂度为 O(n)
- vue2.x 为了降低 Watcher 粒度，每个组件只有一个 Watcher 与之对应，只有引入 diff 才能精确找到变化的 dom
- vue 中 diff 执行的时刻是组件实例执行更新函数时，它会对比 oldVnode 和 newVnode，此过程称为 patch
- diff 遵循深度优先，同层比较的策略，两个节点会根据子节点或者节点类型做不同操作。比较子节点是算法的重点，借助 key 可以精确的找到节点

### Vue 的组件化

- 组件是独立和可复用的代码组织单元。组件化开发能大幅提升开发效率、测试性、复用性等
- 组件可分为：页面组件、业务组件、通用组件
- vue 的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其基于 VueComponent 构造函数，扩展于 Vue
- vue 中常见组件化技术：属性 prop、自定义事件、插槽等，用于组件通信、扩展。
- 遵循单向数据流原则。

### 谈一谈对 vue 设计原则的理解

vue 的特点：渐进式 JavaScript 框架，易用、灵活和高效

- 渐进式：vue 被设计为自下而上逐层应用。Vue 的核心只关注视图层，在于现代化工具链组合时也可以用于复杂的应用
  ![渐进式](https://pic2.zhimg.com/80/v2-ed1c14f584da4f537413082d316cb319_1440w.jpg)
- 易用、灵活和高效
  - 易用：vue 提供数据绑定，模板语法，和基于配置的组件系统，开发难度较低
  - 灵活：当应用足够小时，可以只用到 vue 的核心部分，当应用规模不断扩大，可以引入 vue-router、vuex、vue-cli 等工具。
  - 高效：虚拟 dom 和 diff 算法

### vue 性能优化

- 路由懒加载
- keep-alive 缓存页面
- v-show 复用 dom
- v-for 时避免使用 v-if
- 长列表性能优化：
  - 如果只是纯粹的数据展示，可以冻结数据的响应，Object.freeze(obj)
  - 大数据长列表，可采用虚拟滚动，只渲染少部分区域
- 事件销毁：vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身事件，如 setInterval 等要手动清理，防止内存泄漏
- 图片懒加载：v-lazy
- 第三方组件按需加载
- 无状态组件编辑为函数式组件：`<template functional>// todo</template>`
- 子组件分割

```js
<template>
  <div>
    <ChildComp/>
  </div>
</template>
​
<script>
export default {
  components: {
    ChildComp: {
      methods: {
        heavy () { /* 耗时任务 */ }
      },
      render (h) {
        return h('div', this.heavy())
      }
    }
  }
}
</script>
```

- SSR nuxt.js