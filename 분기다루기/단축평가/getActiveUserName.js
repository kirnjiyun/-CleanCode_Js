function getActiveUserName(user, isLogin) {
    if (isLogin && user) {
        return user.name || "이름없음";
    }
}
//isLogin이 false면 뒤를 확인할 필요가 없다
//둘다참이어야만한다
