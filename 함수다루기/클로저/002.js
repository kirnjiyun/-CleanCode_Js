function add(num1) {
    return function (num2) {
        return function (calculateFn) {
            return calculateFn(num1, num2);
        };
    };
}

function sum(num1, num2) {
    return num1 + num2;
}
function multi(num1, num2) {
    return num1 * num2;
}
const addOne = add(1)(2);
const sumAdd = addOne(sum);
const sumMulti = addOne(multi);
