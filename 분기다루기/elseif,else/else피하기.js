function getUserName(user) {
    if (user.name) {
        return user.name;
    }
    return "이름없음";
}

/**
 * 하나의 함수가 두 가지 역할을 할때
 * age가 20 미만시 특수 함수 실행
 */
function getHelloCustomer(user) {
    if (user.age < 20) {
        report(user);
    } else {
        return "안녕하세요"; //성인이 아닐때도 안녕하세요 해야됨
    }
}
