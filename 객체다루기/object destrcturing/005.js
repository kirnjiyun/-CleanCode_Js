function Person(name, { age, location }) {
    this.name = name;
    this.age = age;
    this.location = location;
}

const pocoOptions = {
    age: 30,
    location: "seoul",
};

const poco = new Person("poco", pocoOptions);

//name은 필수라는걸 명시적으로 알 수 있다
//객체 구조 분해 할당 사용
