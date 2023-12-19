/**
 * Callback Function
 * 함수의 제어권을 다른 함수에 위임
 */

someElement.addEventListener("click", function () {
    console.log(someElement + "이 클릭되었습니다.");
});
function register() {
    const isConfirm = confirm("회원가입에 성공했습니다.");

    if (isConfirm) {
        redirectUserInfoPage();
    }
}

function login() {
    const isConfirm = confirm("로그인에 성공했습니다.");

    if (isConfirm) {
        redirectIndexPage();
    }
}
