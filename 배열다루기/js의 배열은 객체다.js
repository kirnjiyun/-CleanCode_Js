/**
 * JavaScript의 배열은 객체다
 */
const arr = [1, 2, 3];

arr[3] = "test";
arr["property"] = "string value";
arr["obj"] = {};
arr[{}] = [1, 2, 3];
arr["func"] = function () {
    return "hello";
};

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const arr2 = [1, 2, 3];

if (arr2.length) {
    console.log("배열 확인");
}

if (typeof arr2 === "object") {
    console.log("배열 확인");
}
