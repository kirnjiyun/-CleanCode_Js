function favoriteDog(someDog) {
    // if (someDog) {
    //     favoriteDog = dog;
    // } else {
    //     favoriteDog = "냐옹";
    // }

    return (someDog || "냐옹") + "입니다";
}
// someDog(undefined)가 false면 무조건 뒤에까지 오니까
