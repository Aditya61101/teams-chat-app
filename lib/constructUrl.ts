function constructUrl(apiUrl: string, query: Record<string, any> | undefined) {
    let urlWithQuery = apiUrl;

    if (query) {
        const queryString = Object.entries(query)
            .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.map(v => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`).join('&');
                } else {
                    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
                }
            })
            .join('&');

        urlWithQuery += `?${queryString}`;
    }

    return urlWithQuery;
}

export default constructUrl;