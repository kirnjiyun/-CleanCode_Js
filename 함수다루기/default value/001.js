/**
 * default value
 */
function createCarousel(options) {
    options = options || {};
    var margin = options.margin || 0;
    var center = options.center || false;
    var navElement = options.navElement || "div";
    // 방어코드 덕분에 createCarousel() 함수가 호출될 때 파라미터가 없거나, 파라미터로 아무 값도 주어지지 않은 경우에도 오류 없이 기본값을 사용하여 객체를 반환할 수 있게 됩니다.
    return {
        margin,
        center,
        navElement,
    };
}

createCarousel();
