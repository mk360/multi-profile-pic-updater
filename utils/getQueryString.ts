function getQueryString(query: Record<string, string | number | boolean>) {
    const params = new URLSearchParams();
    for (let i in query) {
        params.append(i, query[i].toString());
    }

    return params.toString();
};

export default getQueryString;
