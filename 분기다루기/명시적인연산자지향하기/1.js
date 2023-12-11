let number = 10;

let minus = () => {
    number--;
};
let plus = () => {
    number++;
};
plus();
console.log(number);

let number2 = 100;

let minus2 = () => {
    number2 = number2 - 1;
};
let plus2 = () => {
    number2 = number2 + 1;
};

minus2();
minus2();
minus2();
console.log(number2);
//아래를 지향
//예측가능, 디버깅 쉬움
