// 原型模式
// 例子：创建轮播图
var LoopImages = function (imgArr, container) {
	this.imgArr = imgArr;
	this.container = container;
	// this.createImage = function () {}
	// this.changeImage = function () {}
}

// 滑动切换类
var SlideLoopImg = function (imgArr, container) {
	LoopImages.call(this, imgArr, container);
}
SlideLoopImg.prototype = new LoopImages()
SlideLoopImg.prototype = {
	changeImage: function () {
		console.log('SlideLoopImg')
	}
}

// 渐隐切换类
var FadeLoopImg = function (imgArr, container, arrow) {
	LoopImages.call(this, imgArr, container);
	this.arrow = arrow;
}
FadeLoopImg.prototype = new LoopImages()
FadeLoopImg.prototype = {
	changeImage: function () {
		console.log('FadeLoopImg')
	}
}

var loopImg = new FadeLoopImg([
		'1.jpg', 
		'2.jpg', 
		'3.jpg'
	], 'slide', true);
console.log(loopImg);
loopImg.changeImage();

// 原型模式用于对象创建，比如创建一个实例对象的构造函数比较复杂，或者耗时比较长，或者通过创建多个对象能实现，此时我们最好不要用new关键字来复制这些基类，但可以通过对这些对象属性或方法进行复制来实现创建
var prototypeExtend = function () {
	var args = arguments,
		len = args.length,
		F = function () {},
		i = 0;
	for (; i < len; i ++) {
		for (var j in args[i]) {
			F.prototype[j] = args[i][j]
		}
	}
	return new F()
}
var me = prototypeExtend({
	age: 18,
	sex: 'male',
	jump: function () {
		return 'I jump'
	}
})
console.log(me)
