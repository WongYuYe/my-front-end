// var me = {
// 	call: function (p1, p2) {
// 		return `${p1} call ${p2}`
// 	}
// }
// var call = me.call('i', 'u');
// console.log(call);

// 静态变量
// var Conf = (function () {
// 	var conf = {
// 		MAX_NUM: 100,
// 		MIN_NUM: 1,
// 		COUNT: 1000
// 	}
// 	return {
// 		get: function (name) {
// 			return conf[name]? conf[name]: null
// 		}
// 	}
// })()
// var max_num = Conf.get('MAX_NUM');
// console.log(max_num);
// max_num = 111;
// console.log(max_num);

// 惰性单例
var LazySingle = (function () {
	var _instance = null;
	function Single() {
		return {
			publicMethod: function () {},
			publicProperty: '1.0'
		}
	}
	return function () {
		if (!_instance) {
			console.log('null');
			_instance = Single();
		}
		return _instance
	}
})()
var lazySingle = LazySingle();
console.log(lazySingle);
var exm1 = LazySingle();
console.log(exm1);