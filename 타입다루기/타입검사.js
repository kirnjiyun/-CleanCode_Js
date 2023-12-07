function myFunction() {}
class myClass {}

typeof "문자열";
typeof true;
typeof undefined;
typeof 123;
typeof Symbol();
typeof str;
typeof null;
typeof myFunction;
typeof MyClass;
//typeof가 만능은아니다
//동적으로 변하는 언어라서 타입이 동적이다.
//많은 주의가 필요하다.

const p = {
  name: "wldbdls",
  age: 98,
};
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const coco = new Person("poco", 99);

poco instanceof Person; //true
p instanceof Person; //false

const arr = [];
const func = function () {};
const date = new Date();

arr instanceof Array;
func instanceof Function;
date instanceof Date;
arr instanceof Object;
func instanceof Object;
date instanceof Object;
//다 true 결국 레퍼런스 타입이라 최상위는 다 오브젝트

Object.prototype.toString.call(date); //[object Date]
