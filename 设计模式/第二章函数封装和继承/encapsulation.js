// 封装
// var Book = function (id, bookName) {
// 	this.id = id
// 	this.bookName = bookName
// }

// Book.prototype = {
// 	showBookName: function () {
// 		return this.bookName
// 	}
// }
// var book = new Book(1, 'js')
// console.log(book)
// console.log(book.showBookName())

// var Book = function (id, bookName) {
// 	// 私有变量
// 	var num = 1
// 	var another_id = 2
// 	// 私有方法
// 	function display () { console.log('display') }
// 	// 公有变量
// 	this.id = id
// 	this.bookName = bookName
// 	// 公有方法
// 	this.showBookName = function () {
// 		return this.bookName
// 	}
// 	// 特权方法：可以访问私有变量和私有方法
// 	this.setId = function (another_id) {
// 		this.id = another_id
// 		display()
// 	}
// 	// 构造器
// 	this.setId(another_id)
// }
// var book = new Book(1, 'js')  
// console.log(book)

// var Book = (function () {
// 	// 私有变量
// 	var num = 1
// 	var another_id = 2
// 	// 私有方法
// 	function display () { console.log('display') }
// 	var _book = function (id, bookName) {
// 		// 公有变量
// 		this.id = id
// 		this.bookName = bookName
// 		// 公有方法
// 		this.showBookName = function () {
// 			return this.bookName
// 		}
// 		// 特权方法：可以访问私有变量和私有方法
// 		this.setId = function (another_id) {
// 			this.id = another_id
// 			display()
// 		}
// 		// 构造器
// 		this.setId(another_id)
// 	}
// 	_book.prototype = {
// 		isshow: true,
// 		showId: function () {
// 			return this.id
// 		}
// 	}
// 	return _book
// })()
// var book = new Book(1, 'js')  
// console.log(book.isshow)
// console.log(book.showId())

var Book = function (id, bookName) {
	if (this instanceof Book) {
		this.id = id
		this.bookName = bookName
	} else {
		return new Book(id, bookName)
	}
}
var book = Book(1, 'js')
console.log(book)