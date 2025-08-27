// eslint-disable-next-line no-unused-vars
async function handler(event) {
    const request = event.request;
    const uri = request.uri;

    // Check whether the URI is missing the index.html file name.
    if (uri === '' || uri === '/') {
        request.uri = '/index.html';
        return request;
    }

    // Redirect to root for non-file paths
    if (!uri.includes('.')) {
        return {
            statusCode: 302,
            statusDescription: 'Found',
            headers: { location: { value: `/` } }
        };
    }

    return request;
}
