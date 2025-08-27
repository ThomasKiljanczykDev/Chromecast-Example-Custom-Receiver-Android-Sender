// eslint-disable-next-line no-unused-vars
async function handler(event) {
    const response = event.response;
    const headers = response.headers;

    headers['strict-transport-security'] = {
        value: 'max-age=63072000; includeSubdomains; preload'
    };
    headers['content-security-policy'] = {
        value: "object-src 'none'; base-uri 'none'; frame-ancestors 'none';"
    };
    headers['x-content-type-options'] = { value: 'nosniff' };

    return response;
}
