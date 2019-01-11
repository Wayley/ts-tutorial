// 'use strict'
// 类
class Student {
  fullName: string
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string,
    public age: number
  ) {
    this.fullName = firstName + '·' + middleInitial + '·' + lastName
  }
}
// 接口
interface Person {
  firstName: string
  lastName: string
  age: number
}
function sayHello(person: Person) {
  return `welcome to ts world , and your name is :${person.firstName} ${
    person.lastName
  } ;and u r ${person.age} years old `
}
const user = {
  firstName: 'wang',
  lastName: 'wzheng',
  age: 19
}
let student_1 = new Student('尼古拉斯', '范', '迪塞尔', 10)
let result = sayHello(student_1)

/*  */
const eleId = 'c1'
document.getElementById(eleId).innerHTML = result
console.log(result, '---', student_1)
