function Person({ name, age, location }) {
    this.name = name;
    this.age = age ?? 30;
    this.location = location;
}

const poco = new Person({
    location: "korea",
    name: "poco",
});

//순서 안 지켜도 됨 짱짱
//넣지 않는 값이 있어도 괜찮지롱
