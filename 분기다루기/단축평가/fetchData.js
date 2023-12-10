function fetchData() {
    if (state.data) {
        return state.data;
    } else {
        return "Fetching...";
    }
}
//default 값 있을때 || 쓰기 좋아
return state.data || "Fetching...";
