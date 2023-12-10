function alertMessage(isAdult) {
    isAdult ? alert("입장이 가능합니다.") : alert("입장이 불가능합니다.");
}
//void 반환값이 없어서 둘다 undefined 들어가는거래
//억지인거같대
function alertMessage(isAdult) {
    if (isAdult) {
        alert("입장이 가능합니다.");
    } else {
        alert("입장이 불가능합니다.");
    }
}
function alertMessage(isAdult) {
    return isAdult ? "입장이 가능합니다." : "입장이 불가능합니다";
}
