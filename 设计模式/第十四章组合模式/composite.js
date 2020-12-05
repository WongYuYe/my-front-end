// // 组合模式：又称部分-整体模式，将对象组合成树形结构以表示“部分整体”的层次结构。类似于套餐的感觉

// // 统一接口，创建一个新闻虚拟父类News，特权变量是为了简化子类
// var News = function () {
// 	// 子组件容器
// 	this.children = [];
// 	// 当前组件元素
// 	this.element = null;
// }
// News.prototype = {
// 	init: function () {
// 		throw new Error('rewrite your method')
// 	},
// 	add: function () {
// 		throw new Error('rewrite your method')
// 	},
// 	getElement: function () {
// 		throw new Error('rewrite your method')
// 	}
// }

// // 组合要有容器类
// var Container = function (id, parent) {
// 	News.call(this);
// 	this.id = id;
// 	this.parent = parent;
// 	this.init();
// }
// function inheritPrototype (subObj, superObj) {
// 	var p = Object.create(superObj.prototype);
// 	p.constructor = subObj;
// 	subObj.prototype = p;
// }
// inheritPrototype(Container, News);
// Container.prototype.init = function () {
// 	this.element = document.createElement('ul');
// 	this.element.id = this.id;
// 	this.element.className = 'new-container';
// 	this.parent.appendChild(this.element);
// }
// Container.prototype.add = function (child) {
// 	// 在子元素容器中插入子元素
// 	this.children.push(child);
// 	// 插入当前组件元素树中
// 	this.element.appendChild(child.getElement());
// 	return this;
// }
// Container.prototype.getElement = function () {
// 	return this.element;
// }
// // Container.prototype.show = function () {
// // 	this.parent.appendChild(this.element);
// // }


// var Item = function (className) {
// 	News.call(this);
// 	this.className = className || '';
// 	this.init();
// }
// inheritPrototype(Item, News);
// Item.prototype.init = function () {
// 	this.element = document.createElement('li');
// 	this.element.className = this.className;
// }
// Item.prototype.add = function (child) {
// 	this.children.push(child);
// 	this.element.appendChild(child.getElement());
// 	return this;
// }
// Item.prototype.getElement = function () {
// 	return this.element;
// }

// var ImageNews = function (url, href, className) {
// 	News.call(this);
// 	this.url = url || '';
// 	this.href = href || '';
// 	this.className = className || '';
// 	this.init();
// }
// inheritPrototype(ImageNews, News);
// ImageNews.prototype.init = function () {
// 	this.element = document.createElement('a');
// 	var img = new Image();
// 	img.src = this.href;
// 	this.element.appendChild(img);
// 	this.element.href = this.href;
// 	this.element.className = 'image-news' + this.className;
// }
// ImageNews.prototype.add = function () {}
// ImageNews.prototype.getElement = function () {
// 	return this.element;
// }

// var con = new Container('news', document.body);
// con.add(
// 	new Item('item').add(
// 		new ImageNews('url', '###', 'img')
// 	)
// )

// 其实就是定义层级对象，最底层的没有子对象，另外注意链式调用


// 组合模式更多的用在表单提交
var FormContainer = function (id, parent) {
	this.parent = parent;
	this.children = [];
	this.id = id;
	this.init()
}
FormContainer.prototype = {
	init () {
		this.element = document.createElement('ul');
		this.element.id = this.id;
		this.parent.appendChild(this.element);
	},
	add (child) {
		this.children.push(child);
		this.element.appendChild(child.element);
		return this;
	}
}

var FormItem = function (type, tip) {
	this.type = type;
	this.tip = tip;
	this.init();
}
FormItem.prototype = {
	init () {
		this.element = document.createElement('li');
		var label = document.createElement('label');
		label.name = this.type;
		label.innerHTML = this.type;
		var input = document.createElement('input');
		var span = document.createElement('span');
		span.innerHTML = this.tip;
		this.element.appendChild(label);
		this.element.appendChild(input);
		this.element.appendChild(span);
	}
}
var form = new FormContainer('form', document.body);
form.add(new FormItem('密码', '密码不少于六位'))
