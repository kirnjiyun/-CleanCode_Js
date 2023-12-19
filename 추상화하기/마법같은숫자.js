setTimeout(() => {
    srcollTop();
}, 3 * 60 * 1000);

const DELAY_MS = 3 * 60 * 1000;
setTimeout(() => {
    srcollTop();
}, DELAY_MS);
//숫자 넘기는 곳에서 magic number

//Numberic Operator

const PRICE = {
    MIN: 1_000_000,
    MAX: 100_000_000,
};
console.log(PRICE);

getRandomPrice(0, 100);

//min,max구나
getRandomPrice(PRICE.MIN, PRICE.MAX);

// function isValidName(name) {
//     return carName.length >= 1 && carName.length <= 5;
// } 이거 비추

const CAR_NAME_LEN = {
    MIN: 1,
    MAX: 10,
};

function isValidName(name) {
    return (
        carName.length >= CAR_NAME_LEN.MIN && carName.length <= CAR_NAME_LEN.MAX
    );
}

function notValidNam(value) {
    if (!isArrayItemLengthRange(names, CAR_NAME_LEN.MIN, CAR_NAME_LEN.MAX)) {
        alert(
            `자동차 이름은 ${CAR_NAME_LEN.MIN}자 에서 ${CAR_NAME_LEN.MAX}까지 입력할 수 있습니다.`
        );
    }
}
