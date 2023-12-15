/**
 * Object.freeze
 *
 * 1. 대중적인 유틸 라이브러리 (lodash)
 * 2. 직접 유틸 함수 생성
 * 3. stackoverflow
 * 4. TypeScript => readonly
 */
const STATUS = Object.freeze({
    PENDING: "PENDING",
    SUCCESS: "SUCCESS",
    FAIL: "FAIL",
    OPTIONS: {
        GREEN: "GREEN",
        RED: "RED",
    },
});
STATUS.PENDING = "얼음";
console.log(STATUS);

Object.isFrozen(STATUS.PENDING);

//shallow copy
STATUS.OPTIONS.GREEN = "G";
STATUS.OPTIONS.YELLOW = "Y";
delete STATUS.OPTIONS.RED;

console.log(STATUS.OPTIONS);

/**
 * 중첩된 freezing해야됨
 *
 * 1. 대중적인 유틸 라이브러리 (lodash)
 * 2. 직접 유틸 함수 생성
 * 3. stackoverflow
 * 4. TypeScript => readonly
 */
function deepFreeze(targetObj) {
    return Object.freeze(targetObj);
}
//객체를 순회
//값이 객체인지 확인
//객체이면 재귀
//그렇지 않으면 Object.freeze
