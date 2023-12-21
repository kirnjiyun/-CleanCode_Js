// 선언
// 로직,문
// 반환

const loadingElements = () => {
    const el = document.createElement("div");
    const el2 = document.createElement("div");
    const el3 = document.createElement("div");

    el.setAttribute("class", "loading-1");
    el2.setAttribute("class", "loading-2");
    el3.setAttribute("class", "loading-3");

    el.append(el2);
    el2.append(el3);

    if (el2) {
        return el2;
    }

    return el3;
};
