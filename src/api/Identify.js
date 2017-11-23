import face from './Face';

const identifyFace = ({
    faceIds,
    personGroupId,
}) => {
    const requestUrl = 'face/v1.0/identify';
    const body = JSON.stringify( faceIds, personGroupId);

    return face.post( requestUrl, body );   
}

export {
    identifyFace,
}
