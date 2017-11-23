const faceApiBaseUrl = 'https://westcentralus.api.cognitive.microsoft.com';

const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': process.env.AZURE_FACE_API_KEY,
};

const createFetch = (path, params) => {
    return fetch(`${faceApiBaseUrl}${path}`, params);
};

const createMethodHandler = (method) => {
    return (path, body) => createFetch(path, {
        method,
        headers,
        body: method !== 'GET' && body,
    });
};  

export default {
    get: createMethodHandler('GET'),
    put: createMethodHandler('PUT'),
    post: createMethodHandler('POST'),
    del: createMethodHandler('DELETE'),
};
