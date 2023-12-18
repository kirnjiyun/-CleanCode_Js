function createCar({ name, brand, color, type }) {
    if (!name) {
        throw new Error("name is a required");
    }

    if (!brand) {
        throw new Error("brand is a required");
    }
}

console.log(
    createCar({
        name: "귀요미차",
        brand: "Volkswagen",
        color: "lemonyellow",
        type: "Beatle",
    })
);
console.log(
    createCar({
        name: "귀요미차",
        type: "Beatle",
    })
);
