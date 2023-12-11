/**
 * 배열 요소에 접근하기
 */
function operateTime1(input, operators, is) {
    inputs[0].split("").forEach((num) => {
        cy.get(".digit").contains(num).click();
    });

    inputs[1].split("").forEach((num) => {
        cy.get(".digit").contains(num).click();
    });
}

function operateTime2(input, operators, is) {
    const [firstInput, secondInput] = inputs;
    //이거 리액트에서 useState랑 비슷하대
    firstInput.split("").forEach((num) => {
        cy.get(".digit").contains(num).click();
    });

    secondInput.split("").forEach((num) => {
        cy.get(".digit").contains(num).click();
    });
}

/**
 * 배열 요소에 접근하기
 */
function clickGroupButton1() {
    const confirmButton = document.getElementsByTagName("button")[0];
    const cancelButton = document.getElementsByTagName("button")[1];
    const resetButton = document.getElementsByTagName("button")[2];

    // ...some code
}
function clickGroupButton2() {
    const [confirmButton, cancelButton, resetButton] =
        document.getElementsByTagName("button");

    // ...some code
}
/**
 * 배열 요소에 접근하기
 */
function formatDate(targetDate) {
    const [date] = targetDate.toISOString().split("T"); //여기가 문제임
    const [year, month, day] = date.split("-"); //배열구조분해할당 ㅇㅋ

    return `${year}년 ${month}월 ${day}일`;
}
function head(arr) {
    return arr[0] ?? "";
}
