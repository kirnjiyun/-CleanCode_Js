//임시변수: 특정 공간 scope 안에서 전역변수처럼 활용되는 scope

function getElements() {
  const result = {}; //임시객체
result.title = document.querySelector(".title");
result.text = document.querySelector(".text");
result.value = document.querySelector(".value");

return result;
}
//querySelector라는 웹API를 통해 DOM을 가져온 다음에 객체에 넣어주고 반환하면 끝!

function getElements() {
    const result = {
    result.title = document.querySelector(".title");
    result.text = document.querySelector(".text");
    result.value = document.querySelector(".value");
};
    return result;

}
function getElements() {
    return {
        title : document.querySelector(".title");
        text:  document.querySelector(".text");
        value: document.querySelector(".value");
    };
}