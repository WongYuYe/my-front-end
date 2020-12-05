// 迭代器模式：在不暴露对象内部结构的同时，可以顺序地访问聚合对象内部的元素。
// 迭代器
var Iterator = function (items, container) {
	// 获取父容器，若container参数存在，并且可以获取元素则获取，否则获取document
	var container = container && document.getElementById(container) || document,
		items = container.getElementsByTagName(items),
		length = items.length,
		index = 0;
	var splice = [].splice;
	return {
		first: function () {
			index = 0;
			return items[index];
		},
		last: function () {
			index = items.length - 1;
			return items[index];
		},
		pre: function () {
			if (-- index > 0) {
				return items[index];
			} else {
				index = 0;
				return null;
			}
		},
		next: function () {
			if (++ index < length) {
				return items[index];
			} else {
				index = length - 1;
				return null;
			}
		},
		get: function (num) {
			if (num > 0 && num <= length) {
				index = num;
				return items[num];
			} else {
				return null;
			}
		},
		dealEach: function (fn) {
			var args = splice.call(arguments, 1);
			for (var i = 0; i < length; i ++) {
				fn.apply(items[i], args)
			}
		},
		dealItem: function (num, fn) {
			this.get(num) && fn.apply(this.get(num), splice.call(arguments, 2))
		},
		// 排他方法处理某一个元素的思想是综合运用dealEach方法和dealItem方法。但要注意，如果传入的参数为数组是表示处理多个元素。
		exclusive: function (num, allFn, numFn) {
			// 对所有元素执行回调函数
			this.dealEach(allFn);
			// num是否为数组
			if (num instanceof Array) {
				for (var i = 0, len = num.length; i < len; i ++) {
					this.dealItem(num[i], numFn);
				}
			} else {
				this.dealItem(num, numFn)
			}
		}
	}	
}

var demo = new Iterator('li', container);
console.log(demo.first());
console.log(demo.last());
console.log(demo.pre());
console.log(demo.next());
demo.dealEach(function (text, color) {
	this.innerHTML = text;
	this.style.background = color;
}, 'test', 'pink');
demo.exclusive([2, 3], function () {
	this.innerHTML = '被排除的';
	this.style.background = 'green';
}, function () {
	this.innerHTML = '选中的';
	this.style.background = 'red';
})


// 遍历数组迭代器
var eachArray = function (arr, fn) {
	var i = 0,
		len = arr.length;
	for (; i < len; i ++) {
		if (fn.call(arr[i], i, arr[i]) === false) break;
	}
}
var arr = [1, 2, 3];
eachArray(arr, function (index, item) {
	console.log(`index: ${index}; item: ${item}`)
})

// 遍历对象迭代器
var eachObj = function (obj, fn) {
	for (var key in obj) {
		fn.call(obj[key], key, obj[key])
	}
}
var obj = {
	name: 'wyuye',
	age: 18,
	sex: 'm'
}
eachObj(obj, function (key, value) {
	console.log(`key: ${key}; value: ${value}`)
})


// 同步变量迭代器
// 同步变量
var A = {
	common: {},
	client: {
		user: {
			username: '王煜野',
			uid: 001
		}
	},
	server: {}
}
// 同步变量迭代器
Getter = function (obj, key) {
	if (!obj) {
		return undefined
	}
	var result = obj;
	key = key.split('.');
	for (var i = 0, len = key.length; i < len; i ++) {
		if (result[key[i]] !== undefined) {
			result = result[key[i]]
		} else {
			return undefined
		}
	}
	return result
}

console.log(Getter(A, 'private'));
console.log(Getter(A, 'client'));
console.log(Getter(A, 'client.user.username'));