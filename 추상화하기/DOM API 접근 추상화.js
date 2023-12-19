const createLoader = () => {
    const el = document.createElement("div");
    const el2 = document.createElement("div");
    const el3 = document.createElement("div");
    return { el, el2, el3 };
};

const createLoaderStyle = ({ el, el2, el3 }) => {
    el.setAttribute("class", "loading d-flex justify-cente mt-3");

    el2.setAttribute("class", "relative spinner-container");

    el3.setAttribute("class", "material spinner");
    return { newEl: el, newEl2: el2, newEl3: el3 };
};

const loader = () => {
    const { el, el2, el3 } = createLoader();

    const { newEl, newEl2, newEl3 } = createLoaderStyle({ el, el2, el3 });

    newEl.append(newEl2);
    newEl2.append(newEl3);
    return newEl;
};
