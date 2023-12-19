const arr = [1, 2, 3, "A", "B", "C"];
// const isNumber = (value) => typeof value === "number";

// const isString = (value) => typeof value === "string";

// arr.filter(isNumber);

function isTypeOf(type) {
    return function (value) {
        return typeof value === type;
    };
}

const isNumber = isTypeOf("number");
const isString = isTypeOf("string");
