// <**
// 	工厂模式	
// **>
// var Football = function () {
// 	this.name =  'football'
// }
// // Football.prototype = {
// // 	getMember: function () {
// // 		return '11 persons'
// // 	}
// // }
// var Basketball = function () {
// 	this.name = 'basketball'
// }
// // Basketball.prototype = {
// // 	getMember: function () {
// // 		return '5 persons'
// // 	}
// // }
// var Tennis = function () {
// 	this.name = 'tennis'
// }

// function SportsFactory (name) {
// 	switch (name) {
// 		case 'Football': 
// 			return new Football()
// 			break
// 		case 'Basketball': 
// 			return new Basketball()
// 			break
// 		case 'Tennis': 
// 			return new Tennis()
// 			break		
// 	}
// }
// var sport = SportsFactory('Football')
// // var sport = new Football()
// console.log(sport.name)
// console.log(`the sport is ${sport}`)

// var Factory = function (type, content) {
// 	if (this instanceof Factory) {
// 		var s = new this[type](content)
// 		return s
// 	} else {
// 		return new Factory(type, content)
// 	}
// }
// Factory.prototype = {
// 	JavaScript: function (content) {
// 		this.content = content;
// 		(function () {
// 			var div = document.createElement('div');
// 			div.style.border = '1px solid red';
// 			div.innerHTML = content;
// 			document.getElementById('container').appendChild(div);
// 		})(content)
// 	},
// 	UI: function (content) {
// 		this.content = content;
// 		(function () {
// 			var div = document.createElement('div');
// 			div.style.border = '1px solid blue';
// 			div.innerHTML = content;
// 			document.getElementById('container').appendChild(div);
// 		})(content)
// 	}
// }
// Factory('JavaScript', 'js哪家强')
// Factory('UI', 'ui哪家强')


// var Factory = function (type) {
// 	if (this instanceof Factory) {
// 		var s = new this[type]
// 		return s
// 	} else {
// 		return new Factory(type)
// 	}
// }
// Factory.prototype = {
// 	warning: function () {
// 		(function () {
// 			var div = document.createElement('div');
// 			div.style.border = '1px solid red';
// 			div.style.width = '100px';
// 			div.style.height = '40px';
// 			div.innerHTML = 'warning'
// 			document.getElementById('container').appendChild(div);
// 		})()
// 	},
// 	danger: function () {
// 		(function () {
// 			var div = document.createElement('div');
// 			div.style.border = '1px solid blue';
// 			div.style.width = '100px';
// 			div.style.height = '40px';
// 			div.innerHTML = 'danger'
// 			document.getElementById('container').appendChild(div);
// 		})()
// 	}
// }
// Factory('warning');
// Factory('danger');

// 定义一个产品大类superType，
var VehicleFactory = function (subType, superType) {
	if (typeof VehicleFactory[superType] === 'function') {
		// 缓存类
		// function F () {}
		// 继承父类属性和方法
		// F.prototype = new VehicleFactory[superType]()
		// 将子类constructor指向子类
		subType.constructor = subType
		// 子类原型继承'父类'
		subType.prototype = new VehicleFactory[superType]()
	} else {
		throw new Error('no such Obj')
	}
}

VehicleFactory.Car = function () {
	this.type = 'car'
}
VehicleFactory.Car.prototype = {
	getPrice: function () {
		return new Error('抽象方法不能调用')
	},
	getSpeed: function () {
		return new Error('抽象方法不能调用')
	}
}
var BMW = function (price, speed) {
	this.price = price;
	this.speed = speed;
}
VehicleFactory(BMW, 'Car');
BMW.prototype = {
	getPrice: function () {
		return this.price
	}
}
var bmw = new BMW(20000, 100);
console.log(bmw.getPrice());
