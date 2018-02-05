import face from './Face';

const identifyFace = ({
    faceId,
    personGroupId,
}) => {
    const requestUrl = '/face/v1.0/identify';
    const body = JSON.stringify( faceId, personGroupId);

    return face.post( requestUrl, [body] );   
}

export {
    identifyFace,
}
