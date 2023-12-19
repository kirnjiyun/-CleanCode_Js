/**
 * Pure Function
 * sideEffect 없는 함수
 */
let num1 = 10;
let num2 = 20;

function impureSum1() {
    return num1 + num2;
}
num1 = 30;
//예측이 안됨
//함수 바깥에서 조작 가능해서 예측이 불가능하다
function impureSum2(newNum) {
    return num1 + newNum;
}

function pureSum(num1, num2) {
    return num1 + num2;
}

pureSum(10, 20);
pureSum(10, 20);
pureSum(10, 20);
pureSum(30, 100);
pureSum(30, 100);

/**
 * Pure Function
 */

function changeValue(num) {
    num++;

    return num;
}

////////////////////////////////

const obj = { one: 1 };

// 객체, 배열 => 새롭게 만들어서 반환
function changeObj(targetObj) {
    targetObj.one = 100;

    return targetObj;
}

changeObj(obj);

obj;

function chg(targetObj) {
    return { ...targetObj, one: 100 };
}
changeObj(obj); //{one:100}

obj; //{one:1}
