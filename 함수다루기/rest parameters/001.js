function sumTotal() {
    return Array.from(arguments).reduce((a, c) => a + c);
}
console.log(sumTotal(1, 2, 3, 4, 5));

function sumTotal(initValue, bonusValue, ...args) {
    Array.isArray(args);
    console.log(initValue);
    console.log(bonusValue);
    return args.reduce((a, c) => a + c, initValue);
}
console.log(sumTotal(1000, 100, 1, 2, 3, 4, 5));
