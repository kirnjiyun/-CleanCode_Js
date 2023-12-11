const x = 1;

if (x >= 0) {
    console.log("x는 0과 같거나 크다");
} else if (x > 0) {
    console.log("x는 0보다 크다 ");
} else {
    console.log("Else");
}
// 이걸로바꾸자
switch (key) {
    case value:
        break;

    default:
        break;
}
// 아니면 그냥 명확하게 조건 바꾸기
if (x >= 0) {
    console.log("x는 0과 같거나 크다");
}
if (x > 0) {
    console.log("x는 0보다 크다 ");
}
