const arrayLikeObject = {
    0: "HEllO",
    1: "WORLD",
    length: 2,
    // 쌩뚱맞게 넣음
};
const arr = Array.from(arrayLikeObject);

console.log(Array.isArray(arrayLikeObject));
console.log(Array.isArray(arr));

// 아무런 인자를 매개변수로 받지 않는 함수에 인자로 가변적인 무언가를 넣음
// 미리 선언 ㄴㄴ 여도 함수 내부에서 아규먼츠라는 유사배열객체로 ?
// function generatePriceList() {
//     return arguments.map((arg) => arg + "원");
// }
// 유사배열객체라 안됨 사용하고싶으면

function generatePriceList() {
    return Array.from(arguments).map((arg) => arg + "원");
}
const newList = generatePriceList(100, 200, 300, 400, 500, 600);
console.log(newList);
