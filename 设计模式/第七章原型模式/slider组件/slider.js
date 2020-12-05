var LoopImage = function (option) {
	this.imgArr = option.imgArr;
	this.container = option.container;
	this.autoplay = option.autoplay || false;
	this.arrow = option.arrow || false;
	const len = option.imgArr.length;
	let div = document.createElement('div');
	div.className = 'slider-wrapper';
	const contain = document.getElementById(option.container);
	const width = contain.clientWidth;	
	const height = contain.clientHeight;
	div.style.width = width * len + 'px';
	for (let i = 0; i < len; i ++) {
		imgItem = document.createElement("img");
		imgItem.src = option.imgArr[i]; 
		imgItem.className = 'slider-item';
		imgItem.style.width = width + 'px'; 
		imgItem.style.height = height + 'px'; 
		div.appendChild(imgItem);
	} 
	contain.appendChild(div);
	const wrapper = document.getElementsByClassName('slider-wrapper')[0];
	wrapper.style.transition = `all 1s`;
	let	transX = 0;
	if (this.autoplay) {
		let j = 1;
		setTimeout(function () {
			if (j < len) {
				transX = j * width;
				wrapper.style.transform = `translateX(-${transX}px)`;
				j ++;
			} else {
				wrapper.style.transform = `translateX(0px)`;
				j = 1;
			}
			setTimeout(arguments.callee, 2000);
		}, 2000)
	}
	// if (this.arrow) {
	// 	let left_div = document.createElement('div');
	// 	let left_arrow = document.createElement('div');
	// 	let right_div = document.createElement('div');
	// 	let right_arrow = document.createElement('div');
		
	// 	left_div.className = 'arrow lft';
	// 	left_div.onclick = changeImage;
	// 	left_arrow.className = 'lft-arrow';
	// 	right_div.className = 'arrow rgt';
	// 	right_arrow.className = 'rgt-arrow';
	// 	contain.appendChild(left_div);
	// 	left_div.appendChild(left_arrow);
	// 	contain.appendChild(right_div);
	// 	right_div.appendChild(right_arrow);
	// }
}

var SliderLoopImage = function (option) {
	LoopImage.call(this, option);
}
SliderLoopImage.prototype = {
	changeImage: function () {
		console.log('changeImage')
	}
}
var option = {
	imgArr: [
		'imgs/1.jpg',
		'imgs/2.jpg',
		'imgs/3.jpg',
	],
	container: 'container',
	autoplay: true,
	arrow: true
};
new SliderLoopImage(option);