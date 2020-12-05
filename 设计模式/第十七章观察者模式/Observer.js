// 又称发布-订阅者模式，定义一种依赖关系，解决主体对象与观察者之间的耦合

// 创建观察者
var Observer = (function () {
	var _message = {};
	return {
		regist: function (type, fn) { // 参数消息类型和方法
			// 如果消息类型不存在，则创建消息类型，并把方法推进消息队列
			if (_message[type] === undefined) {
				_message[type] = [fn];
			} else {
				_message[type].push(fn);
			}
		}, 
		fire: function (type, args) { // 参数消息类型和方法执行所需的参数
			if (!_message[type]) return;
			// 定义消息信息
			var events = {
				type: type,
				args: args || {}
			}
			var len = _message[type].length,
				i = 0;
			for (; i < len; i ++) {
				_message[type][i].call(this, events)
			}
		},	
		remove: function (type, fn) { // 参数消息类型和方法
			if (_message[type] instanceof Array) {
				var len = _message[type].length - 1;
				for (; len >= 0; len --) {
					_message[type][len] === fn && _message[type].splice(len, 1)
				}
			}
		}	
	}
})()

Observer.regist('test', function(e) {
	console.log(e);
	console.log('呵呵');
})

Observer.fire('test', {
	num: 1
})