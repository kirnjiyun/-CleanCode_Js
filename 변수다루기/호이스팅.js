//호이스팅이란 런타임 시기에 선언과 할당이 분리되는것
var global = 0;
function outer() {
  console.log(global); //undefined
  var global = 5;
  function inner() {
    var global = 10;
    console.log(global); //10
  }
  inner();
  global = 1;
  console.log(global); //1
}
outer();
//호이스팅 : 런타임시 선언을 최상단으로 끌어올려 주는 것이다. 문제는 코드를 작성할때 예측하지 못한 실행 결과가 노출되는 것이다.
//이를 해결하기 위해 var사용 지양(let, const 애용하기), 함수 표현식을 사용하기
