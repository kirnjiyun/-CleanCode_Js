function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// min과 max에 대해 판단을 하려고 함?
// 미리 상수로 만들어놓기

const MinNum = 0;
const MaxNum = 100;
generateRandomNumber(MinNum, MaxNum);
