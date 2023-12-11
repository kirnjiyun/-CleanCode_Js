function loginService(isLogin, user) {
    if (!isLogin) {
        if (checkToken()) {
            if (!user.nickName) {
                return registerUser(user);
            } else {
                refreshToken();

                return "로그인 성공";
            }
        } else {
            throw new Error("No Token");
        }
    }
}

//로그인여부
//토큰존재여부
//닉네임존재여부

if (isLogin) {
    return;
}

if (!checkToken()) {
    throw new Error("No Token");
}

if (!user.nickName) {
    return registerUser(user);
}

refreshToken();
return "로그인성공";
