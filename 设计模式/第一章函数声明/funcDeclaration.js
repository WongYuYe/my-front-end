// 用对象收编变量
// var checkObj = {
// 	checkName: function () {

// 	},
// 	checkEmail: function () {

// 	}
// }

// 对象函数
// var checkObj = function () {}
// checkObj.checkName = function () { console.log('checkName') }
// checkObj.checkEmail = 1
// console.log(checkObj.checkEmail)

// var checkObj = function () {
// 	return  {
// 		checkName: function () { console.log('checkName') },
// 		checkEmail: 'wyuye_beself@qq.com'
// 	}
// }

// var obj1 = checkObj()
// var obj2 = checkObj()
// console.log(obj1)
// obj1.checkEmail = 'no'
// console.log(obj1)
// console.log(obj2)

// 类
// var checkObj = function () {
// 	this.checkName = function () { console.log('checkName') }
// 	this.checkEmail = 'wyuye_beself@qq.com'
// }
// var obj1 = new checkObj()
// var obj2 = new checkObj()
// obj1.checkEmail = 1
// console.log(obj1)
// console.log(obj2)

// 原型链
var checkObj = function () {}
checkObj.prototype = {
	checkEmail: function () {
		return this
	},
	checkName: function () {
		return this
	}
}
var obj1 = new checkObj()
var obj2 = new checkObj()
// console.log(obj1.checkEmail())
// obj1.checkEmail = function () {
// 	return 'haha'
// }
// console.log(obj1.checkEmail())
// console.log(obj2.checkEmail())
// obj1.checkEmail().checkName()

// Function.prototype.addMethod = function (name, fn) {
// 	this[name] = fn
// 	return this
// }
// var f = new Function()
// f.addMethod('checkName', function () {
// 	console.log('checkName')
// 	return this
// }).addMethod('checkEmail', function () {
// 	console.log('checkEmail')
// 	return this
// })
// f.checkName().checkEmail()

Function.prototype.addMethod = function (name, fn) {
	this.prototype[name] = fn
	return this
}
var f = new Function()
f.addMethod('checkName', function () {
	console.log('checkName')
	return this
}).addMethod('checkEmail', function () {
	console.log('checkEmail')
	return this
})
var ff = new f()
ff.checkName().checkEmail()