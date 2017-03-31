/**组合式继承*/
function Person(name) {
    this.name = name
}
Person.prototype.getName = function () {
    return this.name;
};

function Student(name, age) {
    Person.call(this, name);
    this.age = age;
}
Student.prototype = new Person();
Student.prototype.constructor = Student;
Student.prototype.getAge = function () {
    return this.age;
};
/*class Person {
 constructor(name) {
 this.name = name;
 }

 getName() {
 return this.name;
 }
 }

 class Student extends Person {
 constructor(name, age) {
 super(name);
 this.age = age;
 }

 getAge() {
 return this.age;
 }
 }*/
var xiaoming = new Student('xiaoming', 12);
console.log(xiaoming.getName());
console.log(xiaoming.constructor === Person);
console.log(parseFloat('12.3b'))
function hasPrototypeProperty(obj, name) {
    return !obj.hasOwnProperty(name) && (name in obj)
}
/**寄生式继承*/
function Person(name) {
    this.name = name
}
Person.prototype.getName = function () {
    return this.name;
};

function Student(name, age) {
    Person.call(this, name);
    this.age = age;
}
function inheritPrototype(subtype, supertype) {
    var prototype = Object.create(supertype.prototype);
    prototype.constructor = subtype;
    subtype.prototype = prototype;
}
inheritPrototype(Student, Person);
