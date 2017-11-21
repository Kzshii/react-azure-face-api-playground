const faceApiBaseUrl = 'https://westcentralus.api.cognitive.microsoft.com';

const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': process.env.AZURE_FACE_API_KEY,
};

const get = (path) => fetch(`${faceApiBaseUrl}${path}`, {
    method:'GET',
    headers 
});

const put = (path,body) => fetch(`${faceApiBaseUrl}${path}`, {
    method:'PUT',
    headers,
    body 
});

const post = (path,body) => fetch(`${faceApiBaseUrl}${path}`, {
    method:'POST',
    headers,
    body 
});

const del = (path,body) => fetch(`${faceApiBaseUrl}${path}`, {
    method:'DELETE',
    headers,
    body,
});

export default {
    get,
    put,
    post,
    del,
};
