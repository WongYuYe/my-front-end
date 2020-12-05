// 类式继承
// 声明父类
// function SuperClass () {
// 	this.superValue = true
// }

// //声明子类
// function SubClass () {
// 	this.subValue = false
// }

// SubClass.prototype = new SuperClass()
// // SubClass.prototype = {
// // 	getSubValue: function () {
// // 		return this.subValue
// // 	}
// // }
// var subClass = new SubClass()
// // console.log(subClass.superValue)
// console.log(subClass instanceof SubClass)
// console.log(subClass instanceof SuperClass)
// console.log(SubClass.prototype instanceof SuperClass)
// console.log(subClass instanceof Object)

// 当父类属性为引用类型时
// function SuperClass () {
// 	this.books = ['js', 'html', 'css']
// }
// function SubClass () {}
// SubClass.prototype = new SuperClass()
// var ins1 = new SubClass()
// var ins2 = new SubClass()
// console.log(ins1.books)
// ins1.books.push('ajax')
// console.log(ins2.books)

// 构造函数继承
// 相当于在子类中重新执行了父类的代码，只不过通过call把执行对象改变为子类，因为没有原型继承所以不存在showBooks方法
// function SuperClass (id) {
// 	this.books = ['js', 'html', 'css']
// 	this.id = id
// }
// SuperClass.prototype.showBooks = function () {
// 	return this.books
// }
// function SubClass (id) {
// 	SuperClass.call(this, id)
// }
// var ins1 = new SubClass()
// var ins2 = new SubClass()
// console.log(ins1.books)
// ins1.books.push('ajax')
// console.log(ins2.books)
// console.log(ins2.showBooks())

// 于是乎就可以这样
// 组合继承：用call继承属性，用prototype继承方法，但是父类代码执行了两次
// function SuperClass (id) {
// 	this.books = ['js', 'html', 'css']
// 	this.id = id
// }
// SuperClass.prototype.showBooks = function () {
// 	return this.books
// }
// function SubClass (id) {
// 	SuperClass.call(this, id)
// }
// SubClass.prototype = new SuperClass()
// var ins1 = new SubClass(1)
// var ins2 = new SubClass(2)
// console.log(ins1.books)
// ins1.books.push('ajax')
// console.log(ins2.books)
// console.log(ins2.showBooks())
// console.log(ins1.id)
// console.log(ins2.id)

// 原型式继承
// function inheritObject (o) {
// 	function F () {}
// 	F.prototype = o
// 	return new F()
// }
// var book = {
// 	name: 'js',
// 	books: ['js', 'html']
// }
// var ins1 = inheritObject(book)
// var ins2 = inheritObject(book)
// console.log(ins1)
// console.log(ins1.books)
// ins1.name = 'css'
// ins1.books.push('ajax')
// console.log(ins1.name)
// console.log(ins1.books)
// console.log(ins2.name)
// console.log(ins2.books)

// 寄生式继承
// function createObject (obj) {
// 	var o = inheritObject(obj)
// 	o.showBooks = function () {
// 		return this.books
// 	}
// 	return o
// }
// var ins1 = createObject(book)
// var ins2 = createObject(book)
// ins1.books.push('ajax')
// console.log(ins2.showBooks())

// var book = {
// 	name: 'js',
// 	alikeBook: ['css', 'html']
// }
// var newBook = Object.create(book)

// 终极方法 寄生组合式继承
// function createObj (SubClass, SuperClass) {
// 	// console.log(SuperClass.prototype)
// 	var p = Object.create(SuperClass.prototype)
// 	p.constructor = SubClass
// 	SubClass.prototype = p
// }
// function SuperClass (name) {
// 	this.name = name
// 	this.books = ['js', 'css']
// }
// function SubClass (name) {
// 	SuperClass.call(this, name)
// }
// createObj(SubClass, SuperClass)
// SubClass.prototype.showName = function () {
// 	return this.name
// }
// var sub = new SubClass('html')
// var sub1 = new SubClass()
// console.log(sub.name)
// sub.books.push('ajax')
// console.log(sub1.books)
// var newBook1 = Object.create(book)
// console.log(newBook.name)
// newBook.showName = 100
// console.log(newBook.showName)
// newBook.alikeBook.push('ajax')
// console.log(newBook1.alikeBook)

// 多重继承
// var extend = function (target, source) {
// 	// var _extends = function () {}
// 	for (var prop in source) {
// 		target[prop] = source[prop]
// 	}
// 	return target
// }
// var book = {
// 	name: 'js',
// 	price: 22,
// 	tag: ['js', 'beginner'],
// 	info: {
// 		color: 'red',
// 		size: 14
// 	},
// 	showName: function () {
// 		return this.name
// 	}
// }
// // var laptop = {
// // 	size: 14
// // }
// var sub1 = {}
// extend(sub1, book)
// console.log(sub1)
// Object.prototype.mixin = function () {
// 	var len = arguments.length,
// 		arg,
// 		i = 0
// 	for (; i < len; i ++) {
// 		arg = arguments[i]
// 		for (var prop in arg) {
// 			this[prop] = arg[prop]
// 		}
// 	}
// }
// sub.mixin(book, laptop)
// console.log(sub)
// book.tap.push('ha')
// console.log(sub)
// var deepCopy= function(source) { 
// var result={};
// for (var key in source) {
//       if (typeof source[key] === 'object') {
//       	if (source[key].constructor === Array) {
//       		result[key] = source[key].slice(0)
//       	} else {
// 	      		result[key] = deepCopy(source[key])
//       	}
//       } else {
// 	      result[key] = source[key];
//       }
//    } 
//    return result; 
// }
// var sub2 = deepCopy(book)
// var sub3 = deepCopy(book)
// console.log(sub2)
// sub3.tag.push('ha')
// console.log(sub2)

