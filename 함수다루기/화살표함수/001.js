//화살표함수 사용하지 않을 이유가 있다면 언제일까
const user = {
    name: "marimo",
    getName() {
        return this.name;
    },
};
//화살표함수는 undefined나온다

console.log(user.getName());
/**
 * Arrow Function
 */
const user1 = {
    name: "Poco",
    getName: () => {
        return this.name;
    },
    newFriends: () => {
        const newFriendList = Array.from(arguments);

        return this.name + newFriendList;
    },
};

// user1.newFriends('Jang', '장')
