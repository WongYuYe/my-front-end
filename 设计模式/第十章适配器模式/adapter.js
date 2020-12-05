// 适配器模式
// 将一个类（对象）的接口（方法或属性）转化成另外一个接口，以满足用户需求，使类（对象）之间接口的不兼容问题通过适配器得以解决

// 例如：在原有框架中引入jQuery
// A(function () {
// 	A('button').on('click', function (e) {
// 		// do something...
// 	})
// })()
//当方法相似时可以这样实现，全局对象A与jQuery
// window.A = A = jQuery

// 当方法存在较大差异时
// 例如：
// 定义A框架
// var A = A || {};
// A.g = function (id) {
// 	return document.getElementById(id)
// }
// A.on = function (id, type, fn) {
// 	var dom = typeof id === 'string'? this.g(id): id;
// 	if (dom.addEventListener) {
// 		dom.addEventListener(type, fn, false)
// 	} else if (dom.attachEvent) {
// 		dom.attachEvent(type, fn)
// 	} else {
// 		dom[`on${type}`] = fn
// 	}
// }
// // 窗口加载完成事件
// A.on(window, 'load', function () {
// 	A.on('myBtn', 'click', function () {
// 		// do something...
// 	})
// })

// // 引入jQuery重写方法
// A.g = function (id) {
// 	return $(id).get(0)
// }
// A.on = function (id, type, fn) {
// 	var dom = typeof id === 'string'? $(`#${id}`): $(id);
// 	dom.on(type, fn);
// }

// 参数适配器
/***
	对象obj
	*obj.name: name
	*obj.title: title
	*obj.age: age
	*obj.color: color
	*obj.size: size
	*obj.prize: prize
***/
function doSomething (obj) {
	// 默认参数
	var _adapter = {
		name: 'wyuye',
		title: 'cool',
		age: 18,
		color: '#ffff00',
		size: 100,
		prize: 10
	}
	for (var i in _adapter) {
		_adapter[i] = obj[i] || _adapter[i]
	}
	console.log(_adapter);
	// do something
}
var obj = {
	age: 22
}
doSomething(obj);

// 参数匹配衍生
// 数组适配
var arr = ['javascript', 'book', '前端编程语言', '8月1日'];
var obj = {
	name: '',
	type: '',
	title: '',
	time: ''
}
function adapterObj (arr) {
	return {
		name: arr[0],
		type: arr[1],
		title: arr[2],
		time: arr[3]
	}
}