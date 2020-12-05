// 跨域问题
// 站长统计
var Count = (function () {
	var _img = new Image();
	return function (param) {
		var str = 'http://www.baidu.com?';
		for (var i in param) {
			str += i + '=' + param[i];
		}
		_img.src = str;
	}
})()
var count = Count({num: 10});
count