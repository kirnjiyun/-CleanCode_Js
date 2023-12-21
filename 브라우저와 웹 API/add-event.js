// blackbox : 추상화가 잘못된 사례
// - 내부 구현이 어떻게 동작될지 예측할 수 없는 경우
// - 추상화가 과하게 되거나 명시적인 코드가 아닌 경우

const button = document.querySelector("button");

const handleClick = (e): void => {
    //1.input받는 코드
    //2. 유효성 검사 코드
    //3. form 전송 코드
};

//버튼. 이벤트 등록('이벤트_타입',리스너_함수_실행) =>반응형으로 실행된다.
button.addEventListener("click", (): void => {
    //...some code
    //...some code
    //...some code
    //...some code
    //...some code
    //...some code
    //...some code
    //...some code
});
button.addEventListener("click", handleClick);
button.addEventListener("keyup", handleClick);
