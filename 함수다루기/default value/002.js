function createCarousel(
    {
        margin = 0,
        center = false,
        navElement = "div", //undefined일 경우에 들어감 안전하게 코드 작성 가능
    } = {} //options코드가 들어갔다고 생각하면 됨
) {
    return {
        margin,
        center,
        navElement,
    };
}

createCarousel();
