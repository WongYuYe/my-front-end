// 在不改变原对象的基础上，通过对其进行包装扩展使原有对象可以满足用户的更复杂需求

// 输入框元素
var telInput = document.getElementById('tel_input');
// 输入格式提示文案
var telWarnText = document.getElementById('tel_warn_text');
input.onclick = function () {
	telWarnText.style.display = 'inline-block';
}

var telInput = document.getElementById('tel_input');
var telWarnText = document.getElementById('tel_warn_text');
var telDemoText = document.getElementById('tel_demo_text');
input.onclick = function () {
	telWarnText.style.display = 'inline-block';
	telDemoText.style.display = 'none';
}

var Decorator = function (id, fnObj) {
	var input = document.getElementById(id);
	if (typeof input.onclick === 'function') {
		var inputFn = input.onclick;
		input.onclick = function () {
			inputFn();
			fnObj.click();
		}
	}
	input.onfoucs = function () {
		fnObj.focus();
	}
	input.onblur = function () {
		fnObj.blur();
	}
}
var fnObj = {
	click: function () {},
	focus: function () {},
	blur: function () {}
}
