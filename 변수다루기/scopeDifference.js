var global = "전역";
if (global === "전역") {
  var global = "지역";
  console.log(global); //지역
}
console.log(global); //지역
//지역만 바뀌길 원했는데 전역 공간까지 영향을 주게 되었다.=>if 문이 원인임

let global = "전역";
if (global === "전역") {
  let global = "지역";
  console.log(global); //지역
}
console.log(global); //전역
//굉장히 안전하다.

// if 없이 {block단위로 나누기만 해도 적용됨}

//let 보다 const가 더 좋음
//재할당이라는 키워드를 생각하면 된다.
const person = {
  name: "jean",
  age: 30,
};
// person = {
//     name: "jean2",
//     age: 31,
//   };
//재할당 하려고 하면 바로 에러가 생긴다.
person.name = "lee";
person.age = 35;
console.log(person);

const woman = [
  {
    name: "jean",
    age: 30,
  },
];
woman.push({ name: "koko", age: 10 });
console.log(woman);
//const는 재할당만 금지된다. 본연의 객체 그리고 배열같은 레퍼런스 객체들을 조작할때는 이상이 없다
