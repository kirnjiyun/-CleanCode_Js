/**
 * Array.length
 */

const arr = [1, 2, 3];

console.log(arr.length);

arr.length = 10;

console.log(arr.length);

const arr2 = [1, 2, 3];

arr2[3] = 4;

console.log(arr2.length);

arr2[9] = 10;

console.log(arr2.length);
Array.prototype.clear = function () {
    this.length = 0;
};

function clearArray(array) {
    array.length = 0;

    return array;
}
//배열의 길이 0으로 바꾸면 배열이 초기화된다.
