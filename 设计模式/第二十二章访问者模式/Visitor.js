// 访问者模式(Visitor)：针对于对象结构的元素，定义在不改变该对象的前提下访问结构中元素的新方法。
// 对象访问器：

var Visitor = (function () {
	return {
		// 截取方法
		splice: function () {
			var args = Array.prototype.splice.call(arguments, 1);
			return Array.prototype.splice.apply(arguments[0], args);
		},
		push: function () {
			var len = arguments[0].length || 0;
			var args = this.splice(arguments, 1);
			arguments[0].length = arguments.length - 1 + len;
			return Array.prototype.push.apply(arguments[0], args)
		},
		pop: function () {
			return Array.prototype.pop.apply(arguments[0])
		}
	}
})()

var a = new Object();
// Visitor.push(a, 0, 1, 2);
// console.log(a);
// Visitor.push(a, 1, 2);
// console.log(a);
// Visitor.splice(a, 1, 2, 3);
// console.log(a);
a = {
	'0': 0,
	'1': 1,
	'2': 2,
	'length': 3
}
Array.prototype.splice.call(a, [1, 2]);
console.log(a);