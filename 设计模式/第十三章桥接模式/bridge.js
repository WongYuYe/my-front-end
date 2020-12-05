// 桥接模式：在系统沿着多个维度变化的同事，又不增加其复杂度并已达到解耦

// 例如：添加事件交互 span[0], span[1]
// var spans = document.getElementsByTagName('span')

// spans[0].onmouseover = function () {
// 	this.style.color = 'red'
// 	this.style.background = '#ddd'
// }
// spans[0].onmouseout = function () {
// 	this.style.color = '#333'
// 	this.style.background = '#f5f5f5'
// }

// spans[1].onmouseover = function () {
// 	this.getElementByTagName('strong')[0].style.color = 'red'
// 	this.getElementByTagName('strong')[0].style.background = '#ddd'
// }

// spans[1].onmouseout = function () {
// 	this.getElementByTagName('strong')[0].style.color = '#333'
// 	this.getElementByTagName('strong')[0].style.background = '#f5f5f5'
// }
// ...

// 提取共同点
// function changeColor (dom, color, background) {
// 	dom.style.color = color
// 	dom.style.background = background
// }

// spans[0].onmouseover = function () {
// 	changeColor(this, 'red', '#ddd')
// }
// spans[0].onmouseout = function () {
// 	changeColor(this, '#333', '#f5f5f5')
// }

// 更多
// function Speed (x, y) {
// 	this.x = x
// 	this.y = y
// }
// Speed.prototype.run = function () {
// 	console.log(`run from`)
// }
// function Word (wd) {
// 	this.wd = wd
// }
// Word.prototype.say = function () {
// 	console.log('say')
// }
// function People (x, y, wd) {
// 	this.speed = new Speed(x, y)
// 	this.wd = new Word(wd)
// }
// People.prototype.init = function () {
// 	this.speed.run()
// 	this.wd.say()
// }
// var me = new People(0, 0, 'nihao')
// me.init()


// 创建一个对象桥接method，实现为对象拓展方法的功能
var addFn = function (obj, fnName, fn) {
	if (typeof fnName === 'string' && typeof fn === 'function') {
		obj[fnName] = fn
	} else {
		return 'fnName or fn is wrong'
	}
}

var obj = {
	name: 'me'
}
addFn(obj, 'say', function () {
	console.log(`i am ${this.name}`)
})
console.log(obj)
obj.say()



