// 建造者模式
// 例子：一堆简历，需要根据姓名，职业等分类

// 新建人类
var Human = function (human) {
	this.skill = human && human.skill || '保密';
	this.hobby = human && human.hobby || '保密';
}
Human.prototype = {
	getSkill: function () {
		return this.skill
	},
	getHobby: function () {
		return this.hobby
	}
}

// 新建姓名类
var Named = function (name) {
	var _this = this;
	// _this.fullName = name;
	// if (name.indexOf(' ') > -1) {
	// 	_this.firstName = name.slice(0, name.indexOf(' '));
	// 	_this.lastName = name.slice(name.indexOf(' ') + 1);
	// }
	// 构造器
	// 构造函数解析姓名
	(function (name, _this) {
		_this.fullName = name;
		if (name.indexOf(' ') > -1) {
			_this.firstName = name.slice(0, name.indexOf(' '));
			_this.lastName = name.slice(name.indexOf(' ') + 1);
		}
	})(name, _this)
}


// 新建职业类
var Job = function (job) {
	var _this = this;
	// 构造器
	// 构造函数解析职业
	(function (job, _this) {
		_this.job = job;
		switch (job) {
			case 'Coder':
				_this.jobDescription = '每天沉醉于编程，佩服佩服';
				break;
			case 'UI':	
			case 'UE':
				_this.jobDescription = '设计是一种艺术';
				break;
			default:
				_this.jobDescription = '没有合适的职位描述';
				break;		
		}
	})(job, _this)
}
Job.prototype = {
	changeDescription: function (desc) {
		this.jobDescription = desc
	}
}

// 新建应聘者构造函数
var Person = function (name, job) {
	var human = {
		skill: 'js',
		hobby: 'code'
	}
	var _person = new Human(human);
	_person.name = new Named(name);
	_person.job = new Job(job)
	return _person
}

var wyuye = new Person('wang yuye', 'Coder')
wyuye.job.changeDescription('I never change whatever U changed')
console.log(wyuye)