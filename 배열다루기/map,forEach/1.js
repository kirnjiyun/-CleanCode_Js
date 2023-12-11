/**
 * map vs forEach
 */
const prices = ["1000", "2000", "3000"];

const newPricesForEach = prices.forEach((price) => console.log(price + "원"));
const newPricesMap = prices.map((price) => console.log(price + "원"));

//forEach:포이치는 함수 실행시켜주는것에 불과하다
//map: 조작을 가한다. 결과값 반영이 된다.

newPricesForEach;
newPricesMap;
