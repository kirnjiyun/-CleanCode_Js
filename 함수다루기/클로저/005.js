function fetcher(endpoint) {
    return function (url, options) {
        return fetch(endpoint + url, options)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(res.error);
                }
            })
            .catch((err) => console.error(err));
    };
}

const naverApi = fetcher("http://naver.com");
naverApi("/webtoon").then((res) => res);
