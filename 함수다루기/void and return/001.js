function handleClick() {
    setState(false);
}
function showAlert(message) {
    alert(message);
}
//ㅇ리턴 필요없음

let result;
const test = (sum1, sum2) => {
    result = sum1 + sum2;
};
test(1, 2);
console.log(result);

// function testVoidFunc() {
//     return test(30, 6);
// }
