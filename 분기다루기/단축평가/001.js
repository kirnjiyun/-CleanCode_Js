console.log(true && true && "도달1");
//and는 모두가 참이어야 참이다. 참 참 참

console.log(true && false && "도달2");
//두번째 false에서 걸림

console.log(false || false || "도달3");
//하나라도 참이면 참 true 찾으러 간다

console.log(true || true || "도달4");
//하나라도 참이면 바로 거기서 끝
