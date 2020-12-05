// 外观模式
// 简单理解就是对一些浏览器方法的封装，用来统一接口，例如添加事件方法addEventListener和attachEvent

var me = {
	// 添加事件
	addEvent: function (dom, type, fn) {
		if (dom.addEventListener) {
			dom.addEventListener(type, fn, false);
		} else if (dom.attachEvent) {
			dom.attachEvent(type, fn);
		} else {
			dom[`on${type}`] = fn;
		}
	},
	// 获取事件对象
	getEvent: function (event) {
		return event || window.event
	},
	// 组织默认行为
	preventDefault: function (event) {
		var e = this.getEvent(event);
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
	},
	// 获取目标元素
	getTarget: function (event) {
		var e = this.getEvent(event);
		return e.target || e.srcElement;
	}
}
