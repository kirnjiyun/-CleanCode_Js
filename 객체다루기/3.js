/**
 * Shorthand Properties
 * Concise Method(간결한 메소드)
 * ES2015+
 */
const firstName = "poco";
const lastName = "jang";

const person = {
    firstName,
    lastName,
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },
};
//객체 속성이 함수를 가지면 메소드라고한다.
