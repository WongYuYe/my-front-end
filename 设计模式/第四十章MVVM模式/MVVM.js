// MVVM模式：模型（Model）,视图（View）,视图模型（ViewModel）,为视图层量身定做一套视图模型，并在视图模型中创建属性和方法，为视图层绑定数据并实现交互。

// 视图模型（ViewModel）
~(function () {
	// 在闭包中获取全局变量
	var window = this || (0, eval)('this');
	// 获取页面字体大小
	var FONTSIZE = function () {
		return parseInt(document.body.currentStyle? document.body.currentStyle['fontSize']: getComputedStyle(document.body, false)['fontSize']);
	}();
	var VM = function () {
		// 组件创建策略方法
		var Method = {
			progressbar: function (dom, data) {
				var progress = document.createElement('div'),
					param = data.data;
				progress.style.width = (param.position || 100) + '%';
				dom.className += ' ui-progressbar';
				dom.appendChild(progress); 
			},
			slider: function (dom, data) {
				// 创建slider视图
				var bar = document.createElement('span')
					progress = document.createElement('div')
					totalText = null,
					progressText = null,
					param = data.data,
					width = dom.clientWidth,
					left = dom.offsetWidth,
					realWidth = (param.position || 100) * width / 100;
				dom.innerHTML = '';
				if (param.totalText) {
					text = document.createElement('b');
					progressText = document.createElement('em');
					text.innerHTML = param.totle;
					dom.appendChild(text);
					dom.appendChild(progressText);
				}
				setStyle(realWidth);
				dom.className += ' ui-slider';
				dom.appendChild(progress);	
				dom.appendChild(bar);
				function setStyle (w) {
					progress.style.width = w + 'px';
					bar.style.left = w - FONTSIZE / 2 + 'px';
					if (progressText) {
						progressText.style.left = w - FONTSIZE / 2 * 2.4 + 'px';
						progressText.innerHTML = parseFloat(w / width * 100).toFixed(2) + '%';
					}
				}
				// 添加交互，移动拨片，事件绑定给document是为了优化交互体验，使鼠标光标可以在页面中自由滑动
				bar.onmousedown = function () {
					document.onmousemove = function (event) {
						var e = event || window.event;
						console.log(e);
						var w = e.clientX - left;
						setStyle(w < width? (w > 0? w: 0): width);
					},
					document.onselectstart = function () {
						return false;
					},
					document.onmouseup = function () {
						document.onmousemove = null;
						document.onselectstart = null;
					}
				}
			}
		};
		function getBindData (dom) {
			var data = dom.getAttribute('data-bind');
			// 将自定义属性data-bind值转化为对象
			return !!data && (new Function ('return ({'+ data +'})')) ();
		}
		return function () {
			var doms = document.body.getElementsByTagName('*'),
				ctx = null;
			for (var i = 0; i < doms.length; i ++) {
				ctx = getBindData(doms[i]);
				ctx.type && Method[ctx.type] && Method[ctx.type](doms[i], ctx);
			}	
		}
	}();
	window.VM = VM;
})();

// Model
var demo1 = {
	position: 60,
	totle: 200
	},
	demo2 = {
		position: 20
	},
	demo3 = {
		position: 50
	};

window.onload = function () {
	VM();
}	

