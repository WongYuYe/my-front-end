// 中介者模式(Mediator)：通过中介者对象封装一系列对象之间的交互，使对象之间不再互相引用，降低他们之间的耦合
// 创建中介者对象：

var Mediator = (function () {
	var _msg = {};
	return {
		register: function (type, action) {
			if (_msg[type]) {
				_msg[type].push(action)
			} else {
				_msg[type] = [];
				_msg[type].push(action);
			}
		},
		send: function (type) {
			if (_msg[type]) {
				for (var i = _msg[type].length - 1; i >= 0; i--) {
					_msg[type][i] && _msg[type][i]()
				}
			}
		}
	}
})()

Mediator.register('demo', function () {
	console.log('执行了demo')
})
Mediator.register('demo', function () {
	console.log('再次执行了demo')
})

Mediator.send('demo')