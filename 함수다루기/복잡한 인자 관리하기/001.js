/**
 * 복잡한 인자 관리하기
 */
function toggleDisplay(isToggle) {
    // ...some code
}

function sum(sum1, sum2) {
    // ...some code
}

function genRandomNumber(min, max) {
    // ...some code
}

function timer(start, stop, end) {
    // ...some code
}

function genSquare(top, right, bottom, left) {
    // ...some code
}

//관리하기 어려워 개선하장
function createCar(name, { brand, color, type }) {
    return {
        name,
        brand,
        color,
        type,
    };
}

createCar("차차", { color: "red" });
