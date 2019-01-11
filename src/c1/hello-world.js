// 'use strict'
// 类
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName, age) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.age = age;
        this.fullName = firstName + '·' + middleInitial + '·' + lastName;
    }
    return Student;
}());
function sayHello(person) {
    return "welcome to ts world , and your name is :" + person.firstName + " " + person.lastName + " ;and u r " + person.age + " years old ";
}
var user = {
    firstName: 'wang',
    lastName: 'wzheng',
    age: 19
};
var student_1 = new Student('尼古拉斯', '范', '迪塞尔', 10);
var result = sayHello(student_1);
/*  */
var eleId = 'c1';
document.getElementById(eleId).innerHTML = result;
console.log(result, '---', student_1);
