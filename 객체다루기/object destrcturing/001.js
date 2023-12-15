function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}

const poco = new Person("poco", 30, "korea");
//강제된 매개변수 순서가 문제
