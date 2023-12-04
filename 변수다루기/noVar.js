// var 사용하지말고 const,let 사용해야한다.

// var: 함수 스코프
// let,const: 블록단위 스코프 +TDZ =>안전하게 코드를 작성할 수 있다.

// 안전하게 코드를 작성할 수 있다는 것은 무슨 뜻?

var name = "이름";
var name = "이름1";
var name = "이름2";
var name = "이름3";
consle.log (name)하면 //이름3
만약
console.log(jiyun)
var jiyun = '지유니'
// undefined 나온다. error안 나오고

let name = "이름";
let name = "이름";
// =>이름 이미 선언해서 에러남

const name0 = "이름";
const name0 = "이름";
// =>이름 이미 선언해서 에러남, 얘도 마찬가지인데 const 는 재할당이 안된다. 
