### vue-router 有哪几种导航钩子?

三种

- 全局导航钩子
  - router.beforeEach(to, from, next),
  - router.beforeResolve(to, from, next),
  - router.afterEach(to, from ,next)
- 组件内钩子
  - beforeRouteEnter,
  - beforeRouteUpdate,
  - beforeRouteLeave
- 单独路由独享组件
  - beforeEnter

### active-class 是哪个组件的属性？

vue-router 模块的 router-link 组件。

### 嵌套路由怎么定义？

在实际项目中我们会碰到多层嵌套的组件组合而成，但是我们如何实现嵌套路由呢？因此我们需要在 VueRouter 的参数中使用 children 配置，这样就可以很好的实现路由嵌套。
index.html，只有一个路由出口

```html
<div id="app">
    <!-- router-view 路由出口, 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
</div>
```

main.js，路由的重定向，就会在页面一加载的时候，就会将 home 组件显示出来，因为重定向指向了 home 组件，redirect 的指向与 path 的必须一致。children 里面是子路由，当然子路由里面还可以继续嵌套子路由。

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './home'
import Profile from './profile'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/user',
                name: 'user',
                component: () => import('./user')   // 懒加载
            }
        ]
    }
]

export default new Router({routes})

// main.js
import router from './router'

new Vue({
    el: '#app',
    router,
})
```

home.vue，点击显示就会将子路由显示在出来，子路由的出口必须在父路由里面，否则子路由无法显示。

### 路由之间跳转？

- 声明式（标签跳转） `<router-link :to="index">`
- 编程式（ js 跳转） `router.push('index')`

### 懒加载（按需加载路由）（常考）

- 不进行页面按需加载引入方式：

```js
import home from '../../common/home.vue'
component: home
```

- 进行页面按需加载的引入方式：

```js
component: r => require.ensure([], () => r(require('../../common/home.vue')), 'home') // webpack
component: resolve => require([resolve('../../common/home.vue'), resolve]) // vue
component: () => import('../../common/home.vue') // es
```