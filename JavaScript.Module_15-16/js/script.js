//GOOGLE

(function() {
  var cx = '011348616316548170833:qt8qqhlhccq';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();


//PROTOTYPES
function Human() {
	this.name = 'Mike';
	this.age = 33;
	this.sex = 'male';
	this.height = 170;
	this.weight = 70;
};

Worker.prototype = new Human();
Student.prototype = new Human();

function Worker() {
	this.job = 'farmer';
	this.salary = 1000;
};

function Student() {
	this.university = 'DNTU';
	this.grants = 500;
};

var worker1 = new Worker();
var worker2 = new Worker();
var worker3 = new Worker();

var student1 = new Student();
var student2 = new Student();
var student3 = new Student();

console.log(worker1, worker2, worker3);
console.log(student1, student2, student3);

console.log(worker1.name, worker1.age);
console.log(worker2.height, worker2.weight);
console.log(worker3.sex, worker3.name);

console.log(student1.name, student1.university);
console.log(student2.age, student2.age);
console.log(student3.grants, student3.sex);
$(function(){
worker2.work();
student3.hobby();
})
